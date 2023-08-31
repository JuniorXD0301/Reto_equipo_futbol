import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEquiposComponent } from './components/listar-equipos/listar-equipos.component';
import { EditarEquipoComponent } from './components/editar-equipo/editar-equipo.component';
import { ConsultarEquipoComponent } from './components/consultar-equipo-id/consultar-equipo-id.component';
import { CreateEquipoComponent } from './components/create-equipo/create-equipo.component';
import { DeleteEquipoComponent } from './components/delete-equipo/delete-equipo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/equipos/listar',
    pathMatch: 'full'
  },
  {
    path: 'equipos/listar',
    component: ListarEquiposComponent,
  },
  {
    path: 'equipos/agregar',
    component: EditarEquipoComponent,
  },
  {
    path: 'equipos/editar/:id',
    component: EditarEquipoComponent,
  },
  {
    path: 'equipos/consultar',
    component: ConsultarEquipoComponent,
  },
  {
    path: 'equipos/crear',
    component: CreateEquipoComponent,
  },
  {
    path: 'equipos/eliminar/:id',
    component: DeleteEquipoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
