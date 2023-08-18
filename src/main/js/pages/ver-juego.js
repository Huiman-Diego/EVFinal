const React = require('react');
const client = require('../client');
const { Link, useParams} = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerJuego = () => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [juego, setJuego] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/juegos/' + id
        }).done(response => {
            setJuego(response.entity);
        });
    }, []);


    return (
        <>
            <h1>Ver Juegos</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{juego.nombre}</td>
                </tr>
                <tr>
                    <th>Categoría</th>
                    <td>{juego.categoria}</td>
                </tr>
                <tr>
                    <th>Descripción</th>
                    <td>{juego.descripcion}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerJuego;