import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  public miFormulario: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this._fb.array( [
      ['Doom', Validators.required],
      ['Super Turrican', Validators.required],
    ], Validators.required)
  })

  public nuevoFavorito: FormControl = this._fb.control('', Validators.required);

  public get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private _fb : FormBuilder) { }

  public campoEsValido( campo : string) {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched
  }

  public agregarFavorito() {
    if( this.nuevoFavorito.invalid ){ return; }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ));
    this.favoritosArr.push( this._fb.control( this.nuevoFavorito.value, Validators.required ));

    this.nuevoFavorito.reset();
  }

  public guardar() {
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

  public borrar(index : number){
    this.favoritosArr.removeAt(index);
  }

}
