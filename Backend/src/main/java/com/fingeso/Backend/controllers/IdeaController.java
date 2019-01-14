 package com.fingeso.Backend.controllers;

import com.fingeso.Backend.models.Idea;
import com.fingeso.Backend.repositories.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.apache.logging.log4j.util.PropertySource;

import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping(value = "/ideas")
public class IdeaController {

    @Autowired
    private IdeaRepository repository;

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
}


 
  