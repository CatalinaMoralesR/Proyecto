 package com.fingeso.Backend.controllers;

import com.fingeso.Backend.models.Desafio;
import com.fingeso.Backend.repositories.DesafioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.apache.logging.log4j.util.PropertySource;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

import java.util.List;
import java.util.Date;

 @CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping(value = "/desafios")
public class DesafioController {

    @Autowired
    private DesafioRepository repository;

    //ruta: http://localhost:1313/desafio/id
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Desafio getDesafioList(@PathVariable String id){

        return this.repository.findDesafioById(id);
    }

    //ruta: http://localhost:1313/desafios/getdesafios
    @RequestMapping(value = "/getdesafios", method = RequestMethod.GET)
    @ResponseBody
    public List<Desafio> getDesafios(){

        return this.repository.findAll();
    }


    //    //ruta: http://localhost:1313/desafios/byname/name

    @RequestMapping(value = "/byname/{name}", method = RequestMethod.GET)
    @ResponseBody
    public Desafio getDesafioByNombre(@PathVariable String name) {
        return this.repository.findDesafioByNombre(name);
    }

      //Ruta:  http://localhost:1313/desafios/delete/id
      @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
      @ResponseBody
      public void deleteDesafio(@PathVariable String id) {
      repository.delete(repository.findDesafioById(id));
  }

    //Ruta:  http://localhost:1313/ideas/create

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Desafio createDesafio(@Valid @RequestBody Desafio desafio) {
      repository.save(desafio);
      return desafio;
}
/*
    @RequestMapping(value = "/modify/{id}", method = RequestMethod.PUT)
    public void modifyDesafioById(@PathVariable("id") String id, @Valid @RequestBody Desafio desafio){
    repository.setIdNumber(id);
    repository.save(desafio);
    }

     @RequestMapping(value = "/bydate/{date}", method = RequestMethod.GET)
    @ResponseBody
    public Desafio getDesafioByFechaInicio(@PathVariable Date fecha) {
        return this.repository.findDesafioByFechaInicio(fecha);
    }
    @RequestMapping(value = "/bydate/{date}", method = RequestMethod.GET)
    @ResponseBody
    public Desafio getDesafioByFechaFin(@PathVariable Date fecha) {
        return this.repository.findDesafioByFechaFin(fecha);
    }
*/
}
