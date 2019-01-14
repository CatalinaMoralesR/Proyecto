package com.fingeso.Backend.repository;
import com.fingeso.Backend.model.Idea;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface IdeaRepository extends MongoRepository<Idea, String>{

    Idea findIdeaByIdNumber(String idNumber);
    Idea findIdeaByNombre(String nombre);
}