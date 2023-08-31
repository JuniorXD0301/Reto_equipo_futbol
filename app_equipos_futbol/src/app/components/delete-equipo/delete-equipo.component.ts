import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  templateUrl: './delete-equipo.component.html',
  styleUrls: ['./delete-equipo.component.scss']
})
export class DeleteEquipoComponent {
  equipoId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private equipoService: EquiposService
  ) {}

  ngOnInit() {
    this.equipoId = +this.route.snapshot.params['id'];
  }

  eliminarEquipo() {
    this.equipoService.eliminarEquipo(this.equipoId).subscribe(() => {
      this.snackBar.open('Equipo eliminado con éxito', 'Cerrar', {
        duration: 3000,
      });
      this.router.navigate(['/equipos/listar']);
    });
  }

  volverAListar() {
    this.router.navigate(['/equipos/listar']);
  }
}
