package com.fingeso.Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import java.util.Date;
import java.util.List;

public class Desafio {

    @Id private String idNumber;
    public String nombre;
    public String descripcion;
    private Date fecha_de_inicio;
    private Date fecha_de_fin; 


    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String description) {
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