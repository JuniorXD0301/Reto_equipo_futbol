import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEquiposComponent } from './components/listar-equipos/listar-equipos.component';
import { EditarEquipoComponent } from './components/editar-equipo/editar-equipo.component';
import { ConsultarEquipoComponent } from './components/consultar-equipo-id/consultar-equipo-id.component';
import { CreateEquipoComponent } from './components/create-equipo/create-equipo.component';
import { DeleteEquipoComponent } from './components/delete-equipo/delete-equipo.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent,
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
    path: 'equipos/actualizar/:id',
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
  },
  {
    path: 'logout',
    component: LogoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
