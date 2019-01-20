package com.fingeso.Backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

public class Comentario {
    @Id private String id;
    public String texto;
    public String idIdea;
  //  public Date fecha_publicacion;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String description) {
        this.texto = texto;
    }

    public String getIdIdea(){
        return idIdea;
    }
    public void setIdIdea(String idIdea){
        this.idIdea = idIdea;
    }

 /*   public String getFecha_publicacion() {
        return fecha_publicacion;
    }

    public void setFecha_publicacion(String fecha_publicacion) {
        this.fecha_publicacion = fecha_publicacion;
    }
*/
   
}