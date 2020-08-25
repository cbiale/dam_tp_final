// se especifican las asociaciones
function asociaciones(sequelize) {
	const { medicion, dispositivo, logRiego, electrovalvula } = sequelize.models;

	// una medicion asociada a un dispositivo
	// un dispositivo tiene muchas mediciones
	medicion.belongsTo(dispositivo, { foreignKey: { name : "dispositivoId", allowNull: false}});
	dispositivo.hasMany(medicion, {as : 'mediciones', foreignKey: 'dispositivoId' });
	
	// un logRiego asociado a una electrovalvula
	// una electrovalvula tiene muchos logRiego
	logRiego.belongsTo(electrovalvula, { foreignKey: { name : "electrovalvulaId", allowNull: false}});
	electrovalvula.hasMany(logRiego, {as : 'logRiegos', foreignKey: 'electrovalvulaId' });
	
	// un dispositivo asociado a una electrovalvula
	// una electrovalvula asociada a muchos dispositivos
	dispositivo.belongsTo(electrovalvula, { foreignKey: { name : "electrovalvulaId", allowNull: false}});
	electrovalvula.hasOne(dispositivo, { as : 'dispositivos', foreignKey: 'electrovalvulaId' });
	
}

module.exports = { asociaciones };
