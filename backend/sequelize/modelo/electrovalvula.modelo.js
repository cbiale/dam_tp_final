const { DataTypes } = require('sequelize');

// Se exporta una función que define el modelo
// La función va a recibir automaticamente como argumento el objeto de conexión Sequelize.
module.exports = (sequelize) => {
	sequelize.define('electrovalvula', {
		electrovalvulaId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false
		},
	}, {
		timestamps: false,
		underscored: true,
		tableName: 'electrovalvulas'
	});

};
