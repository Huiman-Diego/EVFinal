package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Integrante {

	private @Id @GeneratedValue Long id;

	@ManyToOne()
	@JoinColumn(name = "id_equipo")
	private Equipo equipo;

	@ManyToOne()
	@JoinColumn(name = "id_jugador")
	private Jugador jugador;

	@ManyToOne()
	@JoinColumn(name = "id_juego")
	private Juego juego;

	public Integrante() {}

	public Integrante (Equipo equipo, Jugador jugador, Juego juego) {
		this.equipo = equipo;
		this.jugador = jugador;
		this.juego = juego;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Equipo getEquipo() {
        return equipo;
    }

    public void setEquipo(Equipo equipo) {
        this.equipo = equipo;
    }

    public Jugador getJugador() {
        return jugador;
    }

    public void setJugador(Jugador jugador) {
        this.jugador = jugador;
    }

    public Juego getJuego() {
        return juego;
    }

    public void setJuego(Juego juego) {
        this.juego = juego;
    }
}