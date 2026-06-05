import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SolicitudPaquete } from '../../models/solicitud-paquete';
import { SolicitudPaqueteService } from '../../services/solicitud-paquete.service';

@Component({
  selector: 'app-solicitud-paquete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitud-paquete.html',
  styleUrl: './solicitud-paquete.css'
})
export class SolicitudPaqueteComponent {

  solicitud: SolicitudPaquete = {
    destino: '',
    numeroPersonas: 1,
    ciudadPartida: '',
    fechaSalida: '',
    horaSalida: '',
    fechaRegreso: '',
    horaRegreso: '',
    observaciones: ''
  };

  mensaje = '';

  constructor(
    private solicitudService: SolicitudPaqueteService
  ) {}

  registrarSolicitud() {

    this.solicitudService
      .registrarSolicitud(this.solicitud)
      .subscribe({

        next: () => {

          this.mensaje =
            'Solicitud registrada correctamente';

          this.solicitud = {
            destino: '',
            numeroPersonas: 1,
            ciudadPartida: '',
            fechaSalida: '',
            horaSalida: '',
            fechaRegreso: '',
            horaRegreso: '',
            observaciones: ''
          };
        },

        error: (error) => {
          console.error(error);
          this.mensaje =
            'Error al registrar solicitud';
        }
      });
  }
}