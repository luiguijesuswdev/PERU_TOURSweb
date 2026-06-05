import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudPaquete } from '../models/solicitud-paquete';

@Injectable({
  providedIn: 'root'
})
export class SolicitudPaqueteService {

  private apiUrl = 'http://localhost:8080/api/solicitudes';

  constructor(private http: HttpClient) {}

  registrarSolicitud(
    solicitud: SolicitudPaquete
  ): Observable<SolicitudPaquete> {
    return this.http.post<SolicitudPaquete>(
      this.apiUrl,
      solicitud
    );
  }
}