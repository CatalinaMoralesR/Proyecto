package com.fingeso.Backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;
import java.util.ArrayList;

public class Idea {
    @Id private String id;
    public String descripcion;
    public String nombre;
    public ArrayList<Comentario> comentarios;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public ArrayList<Comentario> getComentarios() {
        return comentarios;
    }
    public void setComentarios(Comentario comentario){
        this.comentarios.add(comentario);
    }
}