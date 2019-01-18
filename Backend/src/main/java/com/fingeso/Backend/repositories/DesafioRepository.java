package com.fingeso.Backend.repositories;
import com.fingeso.Backend.models.Desafio;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Date;
@Repository
public interface DesafioRepository extends MongoRepository<Desafio, String>{

    Desafio findDesafioById(String id);
    Desafio findDesafioByNombre(String nombre);
   // Desafio findDesafioByFechaInicio(Date fecha_de_inicio);
   // Desafio findDesafioByFechaFin(Date fecha_de_fin);

}