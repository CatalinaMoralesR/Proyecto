package com.fingeso.Backend.repositories;
import com.fingeso.Backend.models.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:4200 ",maxAge = 3600)
public interface UsuarioRepository extends MongoRepository<Usuario, String>{

    Usuario findUsuarioById(String id);
    Usuario findUsuarioByNombre(String nombre);
}