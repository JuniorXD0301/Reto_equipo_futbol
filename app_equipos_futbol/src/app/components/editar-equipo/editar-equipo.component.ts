import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipos';

@Component({
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.scss']
})
export class EditarEquipoComponent {

  equipo: Equipo | any ={
    id: 0,
    nombre: '',
  }
}
