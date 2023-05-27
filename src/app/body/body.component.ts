import { Component, Input, OnInit } from '@angular/core';
import { ObjectsService } from '../Services/endpoints/objects.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  @Input() menuSelect: any;
  imagSelect = 0;
  category = 0;
  constructor(private _ObjectsService: ObjectsService) {}

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
  redirectToWhatsApp() {
    const telefono = '3135959152'; // Reemplaza con tu número de teléfono de WhatsApp
    const mensaje = '¡Hola! Quiero realizar una compra';
    const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(enlace, '_blank');
  }
}
