const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoIntegrantePage = () => {

    let { id } = useParams();
    const [jugadores, setMusicos] = useState([])
    const [juegos, setInstrumentos] = useState([])
    const [idJugador, setIdJugador] = useState('')
    const [idJuego, setIdJuego] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/integrantes',
            entity: {
                equipo: 'http://localhost:8080/api/equipos/'+id,
                jugador: 'http://localhost:8080/api/jugadores/'+idJugador,
                juego: 'http://localhost:8080/api/juegos/'+idJuego
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/jugadores'
        }).done(response=>{
            let jugadores2 = [];
            response.entity._embedded.jugadores.map(jugador => {
                jugadores2.push({value: jugador._links.self.href.split('/').slice(-1), label: jugador.nombre})
            })
            setMusicos(jugadores2)
        })
        client({
            method: 'GET',
            path: '/api/juegos'
        }).done(response=>{
            let juegos2 = [];
            response.entity._embedded.juegos.map(juego => {
                juegos2.push({value: juego._links.self.href.split('/').slice(-1), label: juego.nombre})
            })
            setInstrumentos(juegos2)
        })

    },[])

    return (
        <>
            <h1>Nuevo Integrante</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='jugador'>Jugador</label>
                <select name="jugador" id="jugador" onChange={(e)=>{setIdJugador(e.target.value)}}>
                    {jugadores.map(jugador => {	
                        return (
                            <option key={jugador.value} value={jugador.value}>{jugador.label}</option>
                        )
                    })}
                </select>
                
                <label>Juego</label>
                <select name="juego" id="juego" onChange={(e)=>{setIdJuego(e.target.value)}}>
                    {juegos.map(juego => {	
                        return (
                            <option key={juego.value} value={juego.value}>{juego.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nuevo Integrante" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoIntegrantePage;