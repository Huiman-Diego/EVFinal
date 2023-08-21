const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerEquipo = () => {

    let { id } = useParams();
    const [equipo, setEquipo ] = useState({});
    const [integrantes, setIntegrantes] = useState([]);


    useEffect(() => {
        url_equipo = '/api/equipos/' + id

        client({
            method: 'GET',
            path: url_equipo
        }).done(response => setEquipo(response.entity));

        client({
            method: 'GET',
            path: url_equipo + '/formacion'
        }).done(response => setIntegrantes(response.entity))
        
    }, []);


    return (
        <>
            <h1>Equipo</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{equipo.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <h2>integrantes</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Jugador</th>
                        <th>Juego</th>
                    </tr>
                </thead>
                <tbody>

                    {integrantes.map(integrante => {

                        return (
                            <tr key={integrante.ID}>
                                <td>{integrante.JUGADOR}</td>
                                <td>{integrante.JUEGO}</td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>
            <hr />
            <Link to={`/ver-equipo/${id}/nuevo-integrante`}>Agregar integrante</Link> |  
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerEquipo;