import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: './create-equipo.component.html',
  styleUrls: ['./create-equipo.component.scss'],
})
export class CreateEquipoComponent {
  constructor(
    private fb: FormBuilder,
    private equipoService: EquiposService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  equipoForm: FormGroup = this.fb.group({
    nombre: [''],
    estadio: [''],
    sitioWeb: [''],
    nacionalidad: [''],
    fundacion: [''],
    entrenador: [''],
    capacidad: [''],
    valor: [''],
  });

  onSubmit() {
    if (this.equipoForm.valid) {
      const nuevoEquipo = this.equipoForm.value;
      this.equipoService.saveEquipo(nuevoEquipo).subscribe((res) => {
        this.snackBar
          .open('Equipo creado con éxito', 'Cerrar',)
          .afterDismissed()
          .subscribe(() => {
            this.route.navigate(['/equipos/listar']);
          });
      });
    }
  }
}
