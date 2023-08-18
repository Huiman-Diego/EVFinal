package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repositoryI;
	private final MusicoRepository repositoryM;
	private final EquipoRepository repositoryE;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		InstrumentoRepository repositoryI,
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
		
		Instrumento iVoz = new Instrumento("Voz", "Viento", "Voz humana");
		Instrumento iGuitarrElectrica = new Instrumento("Guitarra Eléctrica", "Eléctrica", "de madera, SIN caja de resonancia, 6 cuerdas templadas metálicas, pastillas y amplificador");
		Instrumento iBajo = new Instrumento("Bajo", "Eléctrico", "Ritmos");
		this.repositoryI.save(new Instrumento("Guitarra Acústica", "Cuerda", "de madera, con caja de resonancia, 6 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Ukelele","Cuerda","de madera, con caja de resonancia pequeña, 4 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Melódica","Viento","teclado pequeño de 2 octavas, sonorizado por soplido"));
		this.repositoryI.save(iVoz);
		this.repositoryI.save(iGuitarrElectrica);
		this.repositoryI.save(iBajo);
		this.repositoryI.save(new Instrumento("Batería", "Percusión", "Percisiones"));

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

		Integrante intFreddie = new Integrante(bAstralis, mFreddie, iVoz);
		this.repositoryN.save(intFreddie);
		Integrante intBrian = new Integrante(bAstralis, mBrian, iGuitarrElectrica);
		this.repositoryN.save(intBrian);
		Integrante intRogerWaters = new Integrante(bFnatic, mRogerWaters, iBajo);
		this.repositoryN.save(intRogerWaters);


	}

	
}