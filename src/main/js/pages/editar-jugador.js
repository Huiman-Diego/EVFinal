const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarJugador = ()=>{

    const {id} = useParams();
    const [jugador, setJugador] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/jugadores/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setJugador(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/jugadores/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: jugador
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <h1>Editar Jugador: {id}</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input 
                    type="text"
                    name="nombre"
                    value={jugador.nombre}
                    onChange={(e)=>{setJugador({...jugador, nombre: e.target.value})}} />
                <br/>
                <input type='submit' value={`Editar Jugador ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarJugador