import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  public persona = {
    nombre: 'Terrance',
    favoritos: [
      { id: 1, nombre: 'Doom' },
      { id: 2, nombre: 'NFS-Pro-Street' },
    ]

  }

  public guardar(){
    console.log('Formulario posteado')
  }

}
