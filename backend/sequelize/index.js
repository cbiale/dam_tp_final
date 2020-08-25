const { Sequelize } = require('sequelize');
const { asociaciones } = require('./asociaciones');

// En una app real, se debe especificar el URL de la db como una variable de entorno.
// en este caso usamos se usa en el archivo por simplicidad.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize('DAM', 'root', 'root', {
	host: 'localhost',
	port: 33060,
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

const definidoresModelo = [
	require('./modelo/dispositivo.modelo'),
	require('./modelo/electrovalvula.modelo'),
	require('./modelo/medicion.modelo'),
	require('./modelo/logriego.modelo'),
];

// Se definen los modelos de acuerdo a los archivos
for (const definidorModelo of definidoresModelo) {
	definidorModelo(sequelize);
}

// Asociaciones
asociaciones(sequelize);

// Exportamos la instancia
module.exports = sequelize;
