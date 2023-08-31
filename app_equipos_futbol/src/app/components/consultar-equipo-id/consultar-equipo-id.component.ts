import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  templateUrl: './consultar-equipo-id.component.html',
  styleUrls: ['./consultar-equipo-id.component.scss']
})
export class ConsultarEquipoComponent {

  resultadoConsulta: any = [];
  constructor(private fb: FormBuilder, private equipoService: EquiposService) { }

  consultaForm: FormGroup = this.fb.group({
    id: [''],
    fechaInicio: [''],
    fechaFin: ['']
  })

  onSubmit() {
    const id = this.consultaForm.value.id;
    const fechaInicio = this.consultaForm.value.fechaInicio;
    const fechaFin = this.consultaForm.value.fechaFin;

    if (id) {
      // Realizar consulta por ID
      this.equipoService.getEquipobyId(id).subscribe((resultado) => {
        console.log(resultado);
        this.resultadoConsulta = resultado;
        // Manejar resultado
      });
    } else if (fechaInicio && fechaFin) {
      // Realizar consulta por rango de fechas
      this.equipoService.getEquipobyFechas(fechaInicio, fechaFin).subscribe((resultado) => {
        console.log(fechaInicio);
        console.log(fechaFin);
        console.log(resultado);
        this.resultadoConsulta = resultado;
        // Manejar resultado
      });
    } else {
      console.log('Error');
      // Mostrar mensaje de error o realizar acción apropiada
    }
  }

  limpiarConsulta() {
    this.consultaForm.reset();
    this.resultadoConsulta = [];
  }

}
