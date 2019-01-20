package com.fingeso.Backend.repositories;
import com.fingeso.Backend.models.Comentario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:4200 ",maxAge = 3600)
public interface ComentarioRepository extends MongoRepository<Comentario, String>{

    Comentario findComentarioById(String idNumber);
}