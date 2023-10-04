package com.example.modulospringbootangular.controller;

import com.example.modulospringbootangular.dao.Contacto;
import com.example.modulospringbootangular.dao.ContactoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contactos")
public class ContactoController {
  private final ContactoRepository contactoRepository;

  public ContactoController(ContactoRepository contactoRepository) {
    this.contactoRepository = contactoRepository;
  }

  @GetMapping
  public List<Contacto> obtenerTodosLosContactos() {
    return contactoRepository.findAll();
  }

  @PostMapping
  public Contacto crearContacto(@RequestBody Contacto contacto) {
    return contactoRepository.save(contacto);
  }

  // Implementa otros métodos para actualizar y eliminar contactos
}
