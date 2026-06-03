package com.perutours.perutoursbackend.service;

import com.perutours.perutoursbackend.entity.SolicitudPaquete;
import com.perutours.perutoursbackend.repository.SolicitudPaqueteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SolicitudPaqueteService {

    private final SolicitudPaqueteRepository solicitudPaqueteRepository;

    public List<SolicitudPaquete> listarSolicitudes() {
        return solicitudPaqueteRepository.findAll();
    }

    public SolicitudPaquete registrarSolicitud(SolicitudPaquete solicitud) {
        return solicitudPaqueteRepository.save(solicitud);
    }
}