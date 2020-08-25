const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rutas = {
	electrovalvulas: require('./rutas/electrovalvulas'),
	dispositivos: require('./rutas/dispositivos'),
	mediciones: require('./rutas/mediciones'),
	logRiegos : require('./rutas/logriegos')
};

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Se crea un manejador para solucionar los errores asincrónicos 
// que no se transmiten correctamente.
function creaManejadorErroresAsync(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

// muestra el listado de dispositivos
app.get('/', (req, res) => {
	res.send(`
		<h2>Dispositivos</h2>
	`);
});

// Se define la REST APIs standard por cada ruta (si existe)
// nombreRuta va a definir una ruta para cada ruta definida de acuerdo al nombre de ruta
// controladorRuta permite el acceso a los metodos definidos en la ruta
for (const [nombreRuta, controladorRuta] of Object.entries(rutas)) {
	
	// recupera todos los objetos de cada entidad
	if (controladorRuta.listar) {
		app.get(
			`/api/${nombreRuta}`,
			creaManejadorErroresAsync(controladorRuta.listar)
		);
	}
	if (controladorRuta.obtenerPorId) {
		app.get(
			`/api/${nombreRuta}/:id`,
			creaManejadorErroresAsync(controladorRuta.obtenerPorId)
		);
	}

	// permite crear una nueva entidad
	if (controladorRuta.crear) {
		app.post(
			`/api/${nombreRuta}`,
			creaManejadorErroresAsync(controladorRuta.crear)
		);
	}

	// permite modificar una entidad
	if (controladorRuta.modificar) {
		app.put(
			`/api/${nombreRuta}/:id`,
			creaManejadorErroresAsync(controladorRuta.modificar)
		);
	}

	// permite eliminar una entidad
	if (controladorRuta.eliminar) {
		app.delete(
			`/api/${nombreRuta}/:id`,
			creaManejadorErroresAsync(controladorRuta.eliminar)
		);
	}

	// elimina todas las entidades de un determinado tipo
	if (controladorRuta.eliminarTodo) {
		app.delete(
			`/api/${nombreRuta}/`,
			creaManejadorErroresAsync(controladorRuta.eliminarTodo)
		);
	}

	// obtiene las mediciones de un dispositivo
	if (controladorRuta.obtenerMedicionesPorId) {
		app.get(
			`/api/${nombreRuta}/:id/mediciones`,
			creaManejadorErroresAsync(controladorRuta.obtenerMedicionesPorId)
		);
	}

}

module.exports = app;
