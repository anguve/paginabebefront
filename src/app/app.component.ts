import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuSelect = 0;
  currentRoute: string;
  title = 'Arrullar';
  constructor(private router: Router) {
    this.currentRoute = '';
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
  receiveObjectActions(receiveObject: any) {
    this.menuSelect = receiveObject;
  }
}
