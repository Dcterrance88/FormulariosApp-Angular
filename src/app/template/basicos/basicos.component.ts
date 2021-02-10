import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') 
  public miFormulario! : NgForm;

  public initForm = {
    producto:'Rtx 4080ti',
    precio: 10,
    existencia: 10,
  }

  constructor() { }

  ngOnInit(): void {
  }

  public nombreValido() : boolean {
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario.controls.producto?.touched
  }

  public precioValido() : boolean {
    return this.miFormulario?.controls.precio?.touched&& this.miFormulario?.controls.precio?.value < 0
  }

  public guardar() : void { 
    // console.log(this.miFormulario);
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      precio:0,
      existencias:0,
    });
  }




}
