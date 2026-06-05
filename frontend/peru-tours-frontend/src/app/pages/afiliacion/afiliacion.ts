import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-afiliacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './afiliacion.html',
  styleUrl: './afiliacion.css',
})
export class Afiliacion {

  cliente: Cliente = {
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    ciudad: ''
  };

  mensaje = '';

  constructor(private clienteService: ClienteService) {}

  registrarCliente() {
    this.clienteService.registrarCliente(this.cliente).subscribe({
      next: () => {
        this.mensaje = 'Afiliación registrada correctamente';

        this.cliente = {
          nombres: '',
          apellidos: '',
          correo: '',
          telefono: '',
          ciudad: ''
        };
      },
      error: (error) => {
        console.error(error);
        this.mensaje = 'Error al registrar afiliación';
      }
    });
  }
}