 package com.fingeso.Backend.controllers;

import com.fingeso.Backend.models.Idea;
import com.fingeso.Backend.models.Comentario;

import com.fingeso.Backend.repositories.IdeaRepository;
import com.fingeso.Backend.repositories.ComentarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.apache.logging.log4j.util.PropertySource;

import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

import java.util.List;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping(value = "/ideas")
public class IdeaController {

    @Autowired
    private IdeaRepository repository;
    @Autowired
    ComentarioRepository comentarioRepository;
    //ruta: http://localhost:1313/ideas/id
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Idea getIdeaList(@PathVariable String id){

        return this.repository.findIdeaById(id);
    }

    //ruta: http://localhost:1313/ideas/getideas
    @RequestMapping(value = "/getideas", method = RequestMethod.GET)
    @ResponseBody
    public List<Idea> getIdeas(){

        return this.repository.findAll();
    }


    //    //ruta: http://localhost:1313/ideas/byname/

    @RequestMapping(value = "/byname/{name}", method = RequestMethod.GET)
    @ResponseBody
    public Idea getIdeaByNombre(@PathVariable String name) {
        return this.repository.findIdeaByNombre(name);
    }   

    //Ruta:  http://localhost:1313/ideas/delete/id
      @RequestMapping(value ="/delete/{id}", method = RequestMethod.DELETE)
      @ResponseBody
      public void deleteIdea(@PathVariable String id) {
      repository.delete(repository.findIdeaById(id));
  }
    //Ruta:  http://localhost:1313/ideas/create

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Idea createIdea(@Valid @RequestBody Idea idea) {
      repository.save(idea);
      return idea;
}

    @RequestMapping(value = "/{id}/comentario/", method = RequestMethod.POST)
    public void createComentarioIdea(@PathVariable("id") String id, @Valid @RequestBody Comentario comentario  ) {
        comentario.setIdIdea(id);
        Idea idea = repository.findIdeaById(id);
        idea.setId(id);
        idea.addComentarios(comentario);
        repository.save(idea);
        comentarioRepository.save(comentario);
    }

    @RequestMapping(value = "/edit/{id}", method = RequestMethod.POST)
    public void editIdea(@PathVariable("id") String id, @Valid @RequestBody Idea idea) {
        idea.setId(id);
        repository.save(idea);
    }

    @RequestMapping(value = "/{id}/voto/", method = RequestMethod.POST)
    public void addVotoIdea(@PathVariable("id") String id) {
        Idea idea = repository.findIdeaById(id);
        idea.setVotos();
        repository.save(idea);
    }
}


 
  