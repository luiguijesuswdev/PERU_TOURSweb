package com.perutours.perutoursbackend.controller;

import com.perutours.perutoursbackend.entity.SolicitudPaquete;
import com.perutours.perutoursbackend.service.SolicitudPaqueteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solicitudes")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class SolicitudPaqueteController {

    private final SolicitudPaqueteService solicitudPaqueteService;

    @GetMapping
    public List<SolicitudPaquete> listarSolicitudes() {
        return solicitudPaqueteService.listarSolicitudes();
    }

    @PostMapping
    public SolicitudPaquete registrarSolicitud(@RequestBody SolicitudPaquete solicitud) {
        return solicitudPaqueteService.registrarSolicitud(solicitud);
    }
}