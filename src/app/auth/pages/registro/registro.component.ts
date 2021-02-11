import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //TODO:Temporal
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  public miFormulario : FormGroup = this._fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]]
  })

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
  }

  public campoNoValido(campo : string) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  public submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
