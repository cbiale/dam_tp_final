const { models, model } = require('../../sequelize');
const { obtenerId } = require('../helpers');

async function listar(req, res) {
	const dispositivos = await models.dispositivo.findAll(
		{
			include: [
				{ model: models.medicion, as : 'mediciones' }, // obtengo mediciones
				{ model: models.electrovalvula }, // obtengo electrovalvula
			],
			order : [
				[ { model : models.medicion, as : "mediciones"}, 'fecha', 'DESC' ],
				[ { model : models.medicion, as : "mediciones"}, 'medicionId', 'DESC' ]
			]
		}
	);
	res.status(200).json(dispositivos);
};

async function obtenerPorId(req, res) {
	const id = obtenerId(req);
	const dispositivo = await models.dispositivo.findByPk(id,
		{
			include: [
				{ model: models.medicion, as : "mediciones"}, // obtengo mediciones
				{ model: models.electrovalvula }, // obtengo electrovalvula
			], 
			order : [
				[ { model : models.medicion, as : "mediciones"}, 'fecha', 'DESC' ]
			]
		}
	);
	if (dispositivo) {
		res.status(200).json(dispositivo);
	} else {
		res.status(404).send('404 - No Encontrado');
	}
};

async function crear(req, res) {
	if (req.body.id) {
		res.status(400).send('Error: ID no debe especificarse');
	} else {
		const electrovalvula = await models.electrovalvula.findByPk(req.body.electrovalvula);
		if (electrovalvula) {
			await models.dispositivo.create(
				{
					nombre: req.body.nombre,
					ubicacion: req.body.ubicacion,
					electrovalvulaId: electrovalvula.electrovalvulaId
				});
			res.status(201).end();
		} else {
			res.status(400).send('ERROR: Electrovalvula erronea');
		}
	}
};

async function modificar(req, res) {
	const id = obtenerId(req);
	await models.dispositivo.update(req.body, {
		where: {
			dispositivoId: id
		}
	});
	res.status(200).end();
};

async function eliminar(req, res) {
	const id = obtenerId(req);
	await models.dispositivo.destroy({
		where: {
			dispositivoId: id
		}
	});
	res.status(200).end();
};

// obtiene las mediciones de un dispositivo
// usa el obtener por dispositivo
// se puede usar el precedente
// aca solo uso para mostrar como devolver solo una parte
async function obtenerMedicionesPorId(req, res) {
	const id = obtenerId(req);
	console.log(id);
	const dispositivo = await models.dispositivo.findByPk(id,
		{
			include: [
				{ model: models.medicion, as : "mediciones"}, // obtengo mediciones
			], 
			order : [
				[ { model : models.medicion, as : "mediciones"}, 'fecha', 'DESC' ]
			]
		}
	);
	if (dispositivo) {
		
		res.status(200).json(dispositivo.mediciones);
	} else {
		res.status(404).send('404 - No Encontrado');
	}
}

module.exports = {
	listar,
	obtenerPorId,
	crear,
	modificar,
	eliminar,
	obtenerMedicionesPorId,
};
