const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoMusico = require('./pages/nuevo-musico');
const PageEditarMusico = require('./pages/editar-musico');
const PageNuevoIntegrante = require('./pages/nuevo-integrante');
const PageVerEquipo = require('./pages/ver-equipo');
const PageVerJuego = require('./pages/ver-juego');
const PageNuevoJuego = require('./pages/nuevo-juego');
const PageEditarJuego = require('./pages/editar-juego');

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-juego/:id', element: <PageVerJuego />},
	{path: '/nuevo-juego', element: <PageNuevoJuego />},
	{path: '/nuevo-musico', element: <PageNuevoMusico />},
	{path: '/editar-musico/:id', element: <PageEditarMusico />},
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
