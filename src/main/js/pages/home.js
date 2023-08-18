const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { instrumentos: [], musicos: [], equipos: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/instrumentos' }).done(response => {
			this.setState({ instrumentos: response.entity._embedded.instrumentos });
		});
		client({ method: 'GET', path: '/api/musicos' }).done(response => {
			this.setState({ musicos: response.entity._embedded.musicos });
		});
		client({ method: 'GET', path: '/api/equipos' }).done(response => {
			this.setState({ equipos: response.entity._embedded.equipos });
		});

	}
	render() {
		return (
			<>
				<h1>Evaluacion Final...</h1>

				<div style={{"width": "100%", "display": "flex"}}>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Instrumentos" emoji="🎸" />
						<InstrumentoList instrumentos={this.state.instrumentos} />
						<Link to="/nuevo-instrumento">Nuevo Instrumento</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Musicos" emoji="🎵" />
						<MusicoList musicos={this.state.musicos} />
						<Link to="/nuevo-musico">Nuevo Musico</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Equipos" emoji="💻" />
						<EquipoList equipos={this.state.equipos} />
						<Link to="/nuevo-equipo">Nuevo Equipo</Link>
					</div>
				</div>




			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}


class InstrumentoList extends React.Component {
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}
class MusicoList extends React.Component {
	render() {
		const musicos = this.props.musicos.map(musico =>
			<Musico key={musico._links.self.href} musico={musico} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}
class EquipoList extends React.Component {
	render() {
		const equipos = this.props.equipos.map(equipo =>
			<Equipo key={equipo._links.self.href} equipo={equipo} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{equipos}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component {
	render() {
		const id = this.props.instrumento._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>
					<Link to={`/ver-instrumento/${id}`}>Ver</Link> | 
					<Link to={`/editar-instrumento/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Musico extends React.Component {
	render() {
		const id = this.props.musico._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.musico.nombre}</td>
				<td>
					<Link to={`/editar-musico/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Equipo extends React.Component {
	render() {
		const id = this.props.equipo._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.equipo.nombre}</td>
				<td>
					<Link to={`/ver-equipo/${id}`}>Ver Equipo</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;