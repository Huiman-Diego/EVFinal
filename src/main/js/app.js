const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoIntegrante = require('./pages/nuevo-integrante');
const PageVerEquipo = require('./pages/ver-equipo');
const PageVerJuego = require('./pages/ver-juego');
const PageNuevoJuego = require('./pages/nuevo-juego');
const PageEditarJuego = require('./pages/editar-juego');
const PageNuevoJugador = require('./pages/nuevo-jugador');
const PageEditarJugador = require('./pages/editar-jugador');

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-juego/:id', element: <PageVerJuego />},
	{path: '/nuevo-juego', element: <PageNuevoJuego />},
	{path: '/nuevo-jugador', element: <PageNuevoJugador />},
	{path: '/editar-jugador/:id', element: <PageEditarJugador />},
	{path: '/editar-juego/:id', element: <PageEditarJuego />},
	{path: '/ver-equipo/:id', element: <PageVerEquipo />},
	{path: '/ver-equipo/:id/nuevo-integrante', element: <PageNuevoIntegrante />},
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
