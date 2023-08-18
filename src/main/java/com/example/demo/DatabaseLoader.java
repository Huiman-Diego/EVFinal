package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final JuegoRepository repositoryI;
	private final MusicoRepository repositoryM;
	private final EquipoRepository repositoryE;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		JuegoRepository repositoryI,
		MusicoRepository repositoryM,
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
		this.repositoryI.save(new Juego("Guitarra Acústica", "Cuerda", "de madera, con caja de resonancia, 6 cuerdas templadas"));
		this.repositoryI.save(new Juego("Ukelele","Cuerda","de madera, con caja de resonancia pequeña, 4 cuerdas templadas"));
		this.repositoryI.save(new Juego("Melódica","Viento","teclado pequeño de 2 octavas, sonorizado por soplido"));
		this.repositoryI.save(iValorant);
		this.repositoryI.save(iGtaV);
		this.repositoryI.save(iCandyCrush);
		this.repositoryI.save(new Juego("Minecraft", "Supervivencia", "Crear todo lo que quieras"));

		Musico mFreddie = new Musico("Freddie");
		Musico mBrian = new Musico("Brian");
		Musico mRogerWaters = new Musico("Roger Waters");
		this.repositoryM.save(mFreddie);
		this.repositoryM.save(mBrian);
		this.repositoryM.save(mRogerWaters);
		this.repositoryM.save(new Musico("Roger"));

		Equipo bAstralis = new Equipo("Astralis");
		Equipo bFnatic = new Equipo("Fnatic");
		this.repositoryE.save(bAstralis);
		this.repositoryE.save(bFnatic);

		Integrante intFreddie = new Integrante(bAstralis, mFreddie, iValorant);
		this.repositoryN.save(intFreddie);
		Integrante intBrian = new Integrante(bAstralis, mBrian, iGtaV);
		this.repositoryN.save(intBrian);
		Integrante intRogerWaters = new Integrante(bFnatic, mRogerWaters, iCandyCrush);
		this.repositoryN.save(intRogerWaters);


	}

	
}