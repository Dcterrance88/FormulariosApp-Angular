import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //TODO:Temporal
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public noPuedeSerStrider( control: FormControl) {
    const valor:string = control.value?.trim().toLowerCase();
    if( valor === 'strider' ){
      return {
        noStrider: true
      }
    }

    return null; //Cuando una validacion regresa un null significa que todo está bien
  }

  public miFormulario : FormGroup = this._fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username:['', [Validators.required, this.noPuedeSerStrider] ],
  })

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Terrance Asimov',
      email: 'terranceasimov@gmail.com',
      username: 'sepran'
    })
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
