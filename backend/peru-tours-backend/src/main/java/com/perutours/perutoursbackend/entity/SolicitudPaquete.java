package com.perutours.perutoursbackend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "solicitudes_paquete")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SolicitudPaquete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String destino;

    private Integer numeroPersonas;

    private String ciudadPartida;

    private LocalDate fechaSalida;

    private LocalTime horaSalida;

    private LocalDate fechaRegreso;

    private LocalTime horaRegreso;

    private String observaciones;
}