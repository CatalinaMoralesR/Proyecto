package com.fingeso.Backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import java.util.Date;
import java.util.List;

public class Desafio {

    @Id private String id;
    public String nombre;
    public String descripcion;
    private Date fecha_de_inicio;
    private Date fecha_de_fin; 


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
    public Date getFecha_de_inicio(){
        return fecha_de_inicio;
    }
    public void setFecha_de_inicio(Date fecha_de_inicio){
        this.fecha_de_inicio = fecha_de_inicio;
    }
   public Date getFecha_de_fin(){
        return fecha_de_fin;
    }
    public void setFecha_de_fin(Date fecha_de_fin){
        this.fecha_de_fin = fecha_de_fin;
    }
   
}