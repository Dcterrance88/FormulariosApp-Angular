import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  public miFormulario : FormGroup = this._fb.group({
    nombre  :['', [Validators.required, Validators.pattern(this._vs.nombreApellidoPattern)]],
    email   :['', [Validators.required, Validators.pattern(this._vs.emailPattern)]],
    username:['', [Validators.required, this._vs.noPuedeSerStrider] ],
  })

  constructor(private _fb : FormBuilder,
              private _vs : ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre  : 'Terrance Asimov',
      email   : 'terranceasimov@gmail.com',
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
