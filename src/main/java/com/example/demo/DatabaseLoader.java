package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final JuegoRepository repositoryI;
	private final JugadorRepository repositoryM;
	private final EquipoRepository repositoryE;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		JuegoRepository repositoryI,
		JugadorRepository repositoryM,
		EquipoRepository repositoryE,
		IntegranteRepository repositoryN) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryE = repositoryE;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Juego iValorant = new Juego("Valorant", "Multijugador", "Disp");
		Juego iGtaV = new Juego("GTA V", "Rol", "Juegos en los que asumes el papel de un personaje");
		Juego iCandyCrush = new Juego("Candy Crush", "Casuales", "Juegos sencillos y de facil acceso");
		this.repositoryI.save(new Juego("FIFA 23", "Deporte", "Videojuego de simulacion de futbol"));
		this.repositoryI.save(new Juego("Amoung Us","Party Games","Identificar a los jugadores que son los impostores"));
		this.repositoryI.save(iValorant);
		this.repositoryI.save(iGtaV);
		this.repositoryI.save(iCandyCrush);
		this.repositoryI.save(new Juego("Minecraft", "Supervivencia", "Crear todo lo que quieras"));

		Jugador mMixwell = new Jugador("Mixwell");
		Jugador mDestt = new Jugador("Destt");
		Jugador mLuois = new Jugador("Louis");
		this.repositoryM.save(mMixwell);
		this.repositoryM.save(mDestt);
		this.repositoryM.save(mLuois);
		this.repositoryM.save(new Jugador("Diego"));

		Equipo bAstralis = new Equipo("Astralis");
		Equipo bFnatic = new Equipo("Fnatic");
		this.repositoryE.save(bAstralis);
		this.repositoryE.save(bFnatic);

		Integrante intMixwell = new Integrante(bAstralis, mMixwell, iValorant);
		this.repositoryN.save(intMixwell);
		Integrante intDestt = new Integrante(bAstralis, mDestt, iGtaV);
		this.repositoryN.save(intDestt);
		Integrante intLuois = new Integrante(bFnatic, mLuois, iCandyCrush);
		this.repositoryN.save(intLuois);


	}

	
}