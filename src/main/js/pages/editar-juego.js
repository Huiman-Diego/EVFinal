const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarJuego = ()=>{

    const {id} = useParams();
    const [juego, setJuego] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/juegos/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setJuego(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/juegos/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: juego
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <h1>Editar Juegos: {id}</h1>

            <form onSubmit={handleSubmit}>

                <label>Nombre</label>
                <input 
                    type="text"
                    name="nombre"
                    value={juego.nombre}
                    onChange={(e)=>{setJuego({...juego, nombre: e.target.value})}} />
                <br/>

                <label>Categoría</label>
                <input 
                    type="text"
                    name="categoria"
                    value={juego.categoria}
                    onChange={(e)=>{setJuego({...juego, categoria: e.target.value})}} />
                <br/>
                
                <label>Descripción</label>
                <input 
                    type="text"
                    name="descripcion"
                    value={juego.descripcion}
                    onChange={(e)=>{setJuego({...juego, descripcion: e.target.value})}} />
                <br/>
                
                <input type='submit' value={`Editar Juego ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarJuego