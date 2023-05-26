import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationServiceService } from '../services/NavigationService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() sendObjectActions = new EventEmitter<object>();
  constructor(private navigationService: NavigationServiceService) {}

  mostrarMenu(item: any) {
    this.sendObjectActions.emit(item);
  }

  ngOnInit() {}
}
