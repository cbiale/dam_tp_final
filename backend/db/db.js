const sequelize = require('../sequelize');

async function resetear() {
	console.log('Genera la base de datos, debe existir la base DAM');
	
	// sincroniza modelo y base de dato
	// si se especifica { force: true } realiza un drop & create 
	await sequelize.sync({ force: true });

	// se crean datos de ejemplo
	
	await sequelize.models.electrovalvula.bulkCreate([
		{ nombre: 'eLPatio' },
		{ nombre: 'laCocina' },
		{ nombre: 'eLJardinDelantero' },
		{ nombre: 'eLLiving' },
		{ nombre: 'elHabitacion1'},
		{ nombre: 'elHabitacion1'},
	]);
	
	await sequelize.models.dispositivo.bulkCreate([
		{ nombre : 'Sensor 1', ubicacion: 'Patio', electrovalvulaId: 1 },
		{ nombre : 'Sensor 2', ubicacion: 'Cocina', electrovalvulaId: 2 },
		{ nombre : 'Sensor 3', ubicacion: 'Jardin Delantero', electrovalvulaId: 3 },
		{ nombre : 'Sensor 4', ubicacion: 'Living', electrovalvulaId: 4 },
		{ nombre : 'Sensor 5', ubicacion: 'Habitacion 1', electrovalvulaId: 5 },
		{ nombre : 'Sensor 6', ubicacion: 'Habitacion 2', electrovalvulaId: 6 },			
	]);
	
	await sequelize.models.medicion.bulkCreate([
		{ fecha: sequelize.fn('NOW'), valor: 60, dispositivoId: 1 },
		{ fecha: sequelize.fn('NOW'), valor: 40, dispositivoId: 1 },
		{ fecha: sequelize.fn('NOW'), valor: 30, dispositivoId: 2 },
		{ fecha: sequelize.fn('NOW'), valor: 50, dispositivoId: 3 },
		{ fecha: sequelize.fn('NOW'), valor: 33, dispositivoId: 5 },
		{ fecha: sequelize.fn('NOW'), valor: 17, dispositivoId: 4 },
		{ fecha: sequelize.fn('NOW'), valor: 29, dispositivoId: 6 },
		{ fecha: sequelize.fn('NOW'), valor: 20, dispositivoId: 1 },
		{ fecha: sequelize.fn('NOW'), valor: 44, dispositivoId: 4 },
		{ fecha: sequelize.fn('NOW'), valor: 61, dispositivoId: 5 },
		{ fecha: sequelize.fn('NOW'), valor: 12, dispositivoId: 2 },
	]);
}

resetear();