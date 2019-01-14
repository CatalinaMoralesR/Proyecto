package com.fingeso.Backend.repositories;
import com.fingeso.Backend.models.Idea;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = " ",maxAge = 3600)
public interface IdeaRepository extends MongoRepository<Idea, String>{

    Idea findIdeaByIdNumber(String idNumber);
    Idea findIdeaByNombre(String nombre);
}