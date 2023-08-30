import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.scss'],
})
export class ListarEquiposComponent implements OnInit {
  equipos: any = [];

  constructor(private equiposService: EquiposService, private datePipe: DatePipe) {}
  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this.equiposService.getEquipos().subscribe(
      (res: any) => {
        this.equipos = res.content;
      },
      (err) => console.log(err)
    );
  }

  formatearFecha(fecha: string): string {
    return this.datePipe.transform(fecha, 'dd/MM/yyyy') || 'No se tiene información del año de fundacion del equipo';
  }
}