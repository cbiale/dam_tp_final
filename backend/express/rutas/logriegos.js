const { models } = require('../../sequelize');
const { obtenerId } = require('../helpers');

async function listar(req, res) {
	const logRiegos = await models.logRiego.findAll();
	res.status(200).json(logRiegos);
};

async function obtenerPorId(req, res) {
	const id = obtenerId(req);
	const logRiego = await models.logRiego.findByPk(id);
	if (logRiego) {
		res.status(200).json(logRiego);
	} else {
		res.status(404).send('404 - No Encontrado');
	}
};

async function crear(req, res) {
	if (req.body.id) {
		res.status(400).send('Error: ID no debe especificarse');
	} else {
		const electrovalvula = await models.electrovalvula.findByPk(req.body.electrovalvulaId);
		if (electrovalvula) {
			await models.logRiego.create(
				{
					apertura: req.body.apertura,
					electrovalvulaId: electrovalvula.electrovalvulaId
				});
			res.status(201).end();
		} else {
			res.status(400).send('ERROR: Electrovalvula erronea');
		}
	}
};

async function eliminar(req, res) {
	const id = getIdParam(req);
	await models.logRiego.destroy({
		where: {
			logRiegoId: id
		}
	});
	res.status(200).end();
};

async function eliminarTodo(req, res) {
	await models.logRiego.destroy({
		where: {},
		truncate: true
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
