 package com.fingeso.Backend.controllers;

import com.fingeso.Backend.models.Comentario;
import com.fingeso.Backend.repositories.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.apache.logging.log4j.util.PropertySource;

import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping(value = "/comentarios")
public class ComentarioController {

    @Autowired
    private ComentarioRepository repository;

    //ruta: http://localhost:1313/comentarios/id
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Comentario getComentarioList(@PathVariable String id){

        return this.repository.findComentarioById(id);
    }

    //ruta: http://localhost:1313/comentarios/getcomentarios
    @RequestMapping(value = "/getcomentarios", method = RequestMethod.GET)
    @ResponseBody
    public List<Comentario> getComentarios(){

        return this.repository.findAll();
    } 

    //Ruta:  http://localhost:1313/comentarios/delete/id
      @RequestMapping(value ="/delete/{id}", method = RequestMethod.DELETE)
      @ResponseBody
      public void deleteCometario(@PathVariable String id) {
      repository.delete(repository.findComentarioById(id));
  }
    //Ruta:  http://localhost:1313/comentarios/create

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Comentario createComentario(@Valid @RequestBody Comentario comentario) {
      repository.save(comentario);
      return comentario;
}
}
