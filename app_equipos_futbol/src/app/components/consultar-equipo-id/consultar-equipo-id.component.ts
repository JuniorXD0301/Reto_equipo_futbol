import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  templateUrl: './consultar-equipo-id.component.html',
  styleUrls: ['./consultar-equipo-id.component.scss'],
})
export class ConsultarEquipoComponent {
  resultadoConsulta: any = [];
  constructor(
    private fb: FormBuilder,
    private equipoService: EquiposService,
    private route: Router,
    private snackbar: MatSnackBar
  ) {}

  consultaForm: FormGroup = this.fb.group({
    id: [''],
    fechaInicio: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^\\d{2}-\\d{2}-\\d{4}$'),
      ]),
    ],
    fechaFin: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^\\d{2}-\\d{2}-\\d{4}$'),
      ]),
    ],
  });

  onSubmit() {
    const id = this.consultaForm.value.id;
    const fechaInicio = this.consultaForm.value.fechaInicio;
    const fechaFin = this.consultaForm.value.fechaFin;

    if (id) {
      // Realizar consulta por ID
      this.equipoService.getEquipobyId(id).subscribe(
        (resultado) => {
          this.resultadoConsulta = resultado;
        },
        (err) => this.snackbar.open(err, 'Cerrar')
      );
    } else if (fechaInicio && fechaFin) {
      // Realizar consulta por rango de fechas
      this.equipoService.getEquipobyFechas(fechaInicio, fechaFin).subscribe(
        (resultado) => {
          this.resultadoConsulta = resultado;
        },
        (err) => this.snackbar.open('Formato fecha incorrecto', 'Cerrar')
      );
    } else {
      this.snackbar.open('No se encontraron resultados', 'Cerrar', {
        duration: 3000,
      });
      console.log('Error');
      // Mostrar mensaje de error o realizar acción apropiada
    }
  }

  limpiarConsulta() {
    this.consultaForm.reset();
    this.resultadoConsulta = [];
  }

  login() {
    this.route.navigate(['/login']);
  }
}
