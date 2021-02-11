import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    nombre     : [ 'RTX 4080ti' ],
    precio     : [ 0 ],
    existencias: [ 0 ],
  })

  constructor( private _fb : FormBuilder) { }

}
