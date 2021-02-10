import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {
  public templateMenu: MenuItem[] = [
    {texto: 'Básicos', ruta: './template/basicos'},
    {texto: 'Dinámicos', ruta: './template/dinamicos'},
    {texto: 'Switches', ruta: './template/switches'},
  ];
  public reactiveMenu: MenuItem[] = [
    {texto: 'Básicos', ruta: './reactive/basicos'},
    {texto: 'Dinámicos', ruta: './reactive/dinamicos'},
    {texto: 'Switches', ruta: './reactive/switches'},
  ]
}
