import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  @Input() menuSelect: any;
  menuSelectChange: any;
  imagSelect = 0;
  category = 0;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(): void {
    this.category = this.menuSelect;
    console.log(this.category);
  }
  cartas = [
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
    { imagSelect: 0 },
  ];
}
