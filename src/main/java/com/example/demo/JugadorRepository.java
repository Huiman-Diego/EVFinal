package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "jugadores", path = "jugadores")
public interface JugadorRepository extends CrudRepository<Jugador, Long> {

}