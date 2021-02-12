import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  public miFormulario : FormGroup = this._fb.group({
    nombre      :['', [Validators.required, Validators.pattern(this._vs.nombreApellidoPattern)]],
    email       :['', [Validators.required, Validators.pattern(this._vs.emailPattern)], [this._ev]],
    username    :['', [Validators.required, this._vs.noPuedeSerStrider]],
    password    :['', [Validators.required, Validators.minLength(6)]],
    repPassword :['', [Validators.required]],
  }, { // validaciones aplicadas a todo el formulario
    validators: [ this._vs.camposIguales( 'password', 'repPassword')]
  });

  get emailErrorMsg() : string {
    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.required ) {
      return 'El email es obligatorio';
    } else if( errors?.pattern ) {
      return 'El email tiene un formato incorrecto';
    } else if( errors?.emailTomado) {
      return 'El email ya existe';
    }
    return '';
  }

  constructor(private _fb : FormBuilder,
              private _vs : ValidatorService,
              private _ev : EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre  : 'Terrance Asimov',
      email   : 'test1@test.com',
      username: 'sepran',
      password: '123456',
      repPassword: '123456'
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
