import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEquiposComponent } from './components/listar-equipos/listar-equipos.component';
import { EditarEquipoComponent } from './components/editar-equipo/editar-equipo.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
