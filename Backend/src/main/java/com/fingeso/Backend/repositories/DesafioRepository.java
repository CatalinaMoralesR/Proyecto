package com.fingeso.Backend.repository;
import com.fingeso.Backend.model.Desafio;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Date;
@Repository
public interface DesafioRepository extends MongoRepository<Desafio, String>{

    Desafio findDesafioByIdNumber(String idNumber);
    Desafio findDesafioByNombre(String nombre);
   // Desafio findDesafioByFechaInicio(Date fecha_de_inicio);
   // Desafio findDesafioByFechaFin(Date fecha_de_fin);

}