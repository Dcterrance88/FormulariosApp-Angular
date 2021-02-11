import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // public miFormulario: FormGroup = new FormGroup({
  //   'nombre'     : new FormControl('RTX 4080Ti'),
  //   'precio'     : new FormControl( 1500 ),
  //   'existencias': new FormControl( 5 ),
  // })

  public miFormulario: FormGroup = this._fb.group({
    nombre     : [ , [ Validators.required, Validators.minLength(3) ] ],
    precio     : [ , [ Validators.required, Validators.min(0)] ],
    existencias: [ , [ Validators.required, Validators.min(0)] ],
  })

  constructor( private _fb : FormBuilder) { }

  public campoEsValido( campo : string) {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched
  }

}
