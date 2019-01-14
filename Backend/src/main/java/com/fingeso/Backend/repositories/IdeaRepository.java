package com.fingeso.Backend.repositories;
import com.fingeso.Backend.models.Idea;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:4200 ",maxAge = 3600)
public interface IdeaRepository extends MongoRepository<Idea, String>{

    Idea findIdeaById(String id);
    Idea findIdeaByNombre(String nombre);
}