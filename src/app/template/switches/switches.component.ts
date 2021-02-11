import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  public persona = {
    genero: 'F',
    notificaciones: false,
  }

  public terminosYCondiciones : boolean = false;

}
