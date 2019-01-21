package com.fingeso.Backend.controllers;

import com.fingeso.Backend.models.Usuario;
import com.fingeso.Backend.repositories.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.apache.logging.log4j.util.PropertySource;

import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

import java.util.List;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;
    //ruta: http://localhost:1313/usuarios/id
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Usuario getUsuarioId(@PathVariable String id){

        return this.repository.findUsuarioById(id);
    }

    //ruta: http://localhost:1313/ideas/getideas
    @RequestMapping(value = "/getUsuario", method = RequestMethod.GET)
    @ResponseBody
    public List<Usuario> getUsuarios(){

        return this.repository.findAll();
    }


    //    //ruta: http://localhost:1313/ideas/byname/

    @RequestMapping(value = "/byname/{name}", method = RequestMethod.GET)
    @ResponseBody
    public Usuario getUsuarioByNombre(@PathVariable String name) {
        return this.repository.findUsuarioByNombre(name);
    }

    //Ruta:  http://localhost:1313/ideas/delete/id
    @RequestMapping(value ="/delete/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteUsuario(@PathVariable String id) {
        repository.delete(repository.findUsuarioById(id));
    }
    //Ruta:  http://localhost:1313/ideas/create

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Usuario createUsuario(@Valid @RequestBody Usuario usuario) {
        repository.save(usuario);
        return usuario;
    }


}