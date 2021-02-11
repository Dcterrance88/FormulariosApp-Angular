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
  styles: []
})
export class DinamicosComponent {

  public nuevoJuego: string = '';

  public persona = {
    nombre: 'Terrance',
    favoritos: [
      { id: 1, nombre: 'Doom' },
      { id: 2, nombre: 'NFS-Pro-Street' },
    ]
  }

  public agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito })
    this.nuevoJuego = '';
  }

  public eliminar(index : number) : void {
    this.persona.favoritos.splice(index, 1);
  }

  public guardar() : void {
    console.log('Formulario posteado')
  }

}
