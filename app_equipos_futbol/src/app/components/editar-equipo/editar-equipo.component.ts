import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Equipo } from 'src/app/models/equipos';
import { EquiposService } from 'src/app/services/equipos.service';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.scss'],
})
export class EditarEquipoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private equipoService: EquiposService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {}
  edit: boolean = false;
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

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if (params['id']) {
      this.equipoService
        .getEquipobyId(params['id'])
        .subscribe((equipo: any) => {
          this.edit = true;
          equipo['fundacion'] = this.datePipe.transform(
            equipo['fundacion'],
            'yyyy-MM-dd'
          );
          this.equipoForm.patchValue(equipo);
        });
    }
  }

  onSubmit() {
    const params = this.activeRoute.snapshot.params;
    this.equipoService
      .actualizarEquipo(params['id'], this.equipoForm.value)
      .subscribe(
        (res) => {
          this.route.navigate(['/equipos/listar']);
        },
        (err) => console.log(err)
      );
  }

  equipo: Equipo | any = {
    id: 0,
    nombre: '',
    estadio: '',
    sitioWeb: '',
    nacionalidad: '',
    fundacion: '',
    entrenador: '',
    capacidad: '',
    valor: '',
  };
}
