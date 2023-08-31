import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEquiposComponent } from './components/listar-equipos/listar-equipos.component';
import { EditarEquipoComponent } from './components/editar-equipo/editar-equipo.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultarEquipoComponent } from './components/consultar-equipo-id/consultar-equipo-id.component';
import { CreateEquipoComponent } from './components/create-equipo/create-equipo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteEquipoComponent } from './components/delete-equipo/delete-equipo.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ListarEquiposComponent,
    EditarEquipoComponent,
    ConsultarEquipoComponent,
    CreateEquipoComponent,
    DeleteEquipoComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
