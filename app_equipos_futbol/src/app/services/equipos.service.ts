import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../models/equipos';


@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  constructor(private http: HttpClient) {}

  API_URI = 'https://wo-fifa.azurewebsites.net';

  getEquipos() {
    return this.http.get(`${this.API_URI}/equipos/listar/0/100`);
  }

  getEquipobyId(id: number){
    return this.http.get(`${this.API_URI}/equipos/consultar/${id}`);
  }

  getEquipobyFechas(fechaInicio: string, fechaFin: string){
    return this.http.get(`${this.API_URI}/equipos/consultar/${fechaInicio}/${fechaFin}`);
  }

  saveEquipo(equipo: Equipo){
    return this.http.post(`${this.API_URI}/equipos/crear`, equipo);
  }

  actualizarEquipo(id: number, equipo: Equipo){
    return this.http.put(`${this.API_URI}/equipos/actualizar/${id}`, equipo);
  }

  eliminarEquipo(id: number){
    return this.http.delete(`${this.API_URI}/equipos/eliminar/${id}`);
  }

  login(usuario: string, password: string){
    return this.http.post(`${this.API_URI}/login`, {usuario, password})
  }
  
  logout(){
    return this.http.get(`${this.API_URI}/logout`)
  }
}
