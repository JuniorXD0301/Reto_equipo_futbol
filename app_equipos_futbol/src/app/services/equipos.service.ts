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

  saveEquipo(equipo: Equipo) {
    return this.http.post(`${this.API_URI}/equipos/agregar`, equipo);
  }
}
