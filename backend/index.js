const app = require('./express/app');
const sequelize = require('./sequelize');

const PUERTO = 3000;

async function conectarDB() {
	console.log(`Controlando acceso a base de datos...`);
	try {
		await sequelize.authenticate();
		console.log('Conectado!');
	} catch (error) {
		console.log('ERROR:');
		console.log(error.message);
		process.exit(1);
	}
}

async function iniciar() {
	await conectarDB();

	console.log(`Iniciando en puerto ${PUERTO}...`);

	app.listen(PUERTO, () => {
		console.log(`Servidor iniciado en puerto ${PUERTO}`);
	});
}

iniciar();
