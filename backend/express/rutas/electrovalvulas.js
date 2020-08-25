const { models } = require('../../sequelize');
const { obtenerId } = require('../helpers');

async function listar(req, res) {
	const electrovalvulas = await models.electrovalvula.findAll();
	res.status(200).json(electrovalvulas);
};

async function obtenerPorId(req, res) {
	const id = obtenerId(req);
	const electrovalvula = await models.electrovalvula.findByPk(id,
		{
			include: [
				{ model: models.logRiego, as: "logRiegos" }, // obtengo mediciones
			],
			order: [
				[{ model: models.logRiego, as: "logRiegos" }, 'fecha', 'DESC']
			]
		});
	if (electrovalvula) {
		res.status(200).json(electrovalvula);
	} else {
		res.status(404).send('404 - No Encontrado');
	}
};

async function crear(req, res) {
	if (req.body.id) {
		res.status(400).send('Error: ID no debe especificarse');
	} else {
		await models.electrovalvula.create(req.body);
		res.status(201).end();
	}
};

async function modificar(req, res) {
	const id = getIdParam(req);

	if (req.body.id === id) {
		await models.electrovalvula.update(req.body, {
			where: {
				electrovalvulaId: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send('Error: ID no encontrado');
	}
};

async function eliminar(req, res) {
	const id = getIdParam(req);
	await models.electrovalvula.destroy({
		where: {
			electrovalvulaId: id
		}
	});
	res.status(200).end();
};

module.exports = {
	listar,
	obtenerPorId,
	crear,
	modificar,
	eliminar,
};
