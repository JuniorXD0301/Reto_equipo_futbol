import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.scss'],
})
export class ListarEquiposComponent implements OnInit {
  equipos: any = [];

  constructor(
    private equiposService: EquiposService,
    private datePipe: DatePipe,
    private route: Router
  ) {}
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
    return (
      this.datePipe.transform(fecha, 'yyyy-MM-dd') ||
      'No se tiene información del año de fundacion del equipo'
    );
  }

  editarEquipo(id: number) {
    this.route.navigate(['/equipos/actualizar', id]);
  }

  crearEquipo(){
    this.route.navigate(['/equipos/crear']);
  }

  eliminarEquipo(id: number) {
    // Redirige a la URL equipos/eliminar/:id
    this.route.navigate(['/equipos/eliminar', id]);
  }

  logout() {
    this.equiposService.logout();
    this.route.navigate(['/logout']);
  }
}
