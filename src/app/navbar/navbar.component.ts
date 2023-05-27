import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() sendObjectActions = new EventEmitter<object>();
  constructor() {}

  mostrarMenu(item: any) {
    this.sendObjectActions.emit(item);
  }

  ngOnInit() {}
}
