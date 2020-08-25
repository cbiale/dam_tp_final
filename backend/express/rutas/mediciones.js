const { models } = require('../../sequelize');
const { obtenerId } = require('../helpers');

async function listar(req, res) {
	const mediciones = await models.medicion.findAll();
	res.status(200).json(mediciones);
};

async function obtenerPorId(req, res) {
	const id = obtenerId(req);
	const medicion = await models.medicion.findByPk(id);
	if (medicion) {
		res.status(200).json(medicion);
	} else {
		res.status(404).send('404 - No Encontrado');
	}
};

async function crear(req, res) {
	if (req.body.id) {
		res.status(400).send('Error: ID no debe especificarse');
	} else {
		const dispositivo = await models.dispositivo.findByPk(req.body.dispositivoId);
		if (dispositivo) {
			await models.medicion.create(
				{
					valor: req.body.valor,
					dispositivoId: dispositivo.dispositivoId
				});
			res.status(201).end();
		} else {
			res.status(400).send('ERROR: Dispositivo erroneo');
		}
	}
};

async function eliminar(req, res) {
	const id = getIdParam(req);
	await models.medicion.destroy({
		where: {
			medicionId : id
		}
	});
	res.status(200).end();
};

async function eliminarTodo(req, res) {
	await models.medicion.destroy({
		where: {},
		truncate : true
	});
	res.status(200).end();
};

module.exports = {
	listar,
	obtenerPorId,
	crear,
	eliminar,
	eliminarTodo
};
