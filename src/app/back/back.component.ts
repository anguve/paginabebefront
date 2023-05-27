import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
})
export class BackComponent implements OnInit {
  formulario: FormGroup;
  public nombre: string | undefined;
  public precio: number | undefined;
  public categoria: string | undefined;
  public estado: string | undefined;
  public selectedFile: File | undefined;
  public selectedFile2: File | undefined;
  public selectedFile3: File | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      estado: ['', Validators.required],
      precio: ['', Validators.required],
      foto: ['', Validators.required],
      foto2: ['', Validators.required],
      foto3: ['', Validators.required],
    });
  }

  ngOnInit() {}
  items = [
    { nombre: 'Producto 1', precio: 10, foto: '' },
    { nombre: 'Producto 2', precio: 20, foto: '' },
    { nombre: 'Producto 3', precio: 30, foto: '' },
    // Agrega más elementos según tus necesidades
  ];

  onSubmit(): void {
    if (this.formulario.valid) {
      const formData = new FormData();
      formData.append('nombre', this.formulario.value.nombre);
      formData.append('precio', this.formulario.value.precio);
      formData.append('foto', this.formulario.value.foto);
      formData.append('foto2', this.formulario.value.foto2);
      formData.append('foto3', this.formulario.value.foto3);
      formData.append('categoria', this.formulario.value.categoria);
      formData.append('estado', this.formulario.value.estado);

      // Enviar formData al servidor o realizar otras acciones
      console.log(formData);
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.formulario.patchValue({ foto: file });
  }

  onFileSelected2(event: any): void {
    const file = event.target.files[0];
    this.formulario.patchValue({ foto2: file });
  }

  onFileSelected3(event: any): void {
    const file = event.target.files[0];
    this.formulario.patchValue({ foto3: file });
  }
}
