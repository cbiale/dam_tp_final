const { DataTypes } = require('sequelize');

// Se exporta una función que define el modelo
// La función va a recibir automaticamente como argumento el objeto de conexión Sequelize.
module.exports = (sequelize) => {
	sequelize.define('medicion', {
		medicionId : {
			type : DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		fecha : {
			type : DataTypes.DATE(6),
			allowNull: false,
			defaultValue: sequelize.fn('NOW')
		},
		valor : {
			type : DataTypes.STRING,
			allowNull: false
		}
	  }, {
		timestamps: false,
		underscored: true,
		tableName : 'mediciones'
	});
};
