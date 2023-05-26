import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuSelect = 0;
  title = 'paginabebes';

  receiveObjectActions(receiveObject: any) {
    this.menuSelect = receiveObject;
  }
}
