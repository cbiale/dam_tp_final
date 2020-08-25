const { DataTypes } = require('sequelize');

// Se exporta una función que define el modelo
// La función va a recibir automaticamente como argumento el objeto de conexión Sequelize.
module.exports = (sequelize) => {
	sequelize.define('logRiego', {
		logRiegoId : {
			type : DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		apertura : {
			type : DataTypes.INTEGER,
			allowNull: false
		},
		apertura : {
			type : DataTypes.INTEGER,
			allowNull: false
		},
		fecha : {
			type : DataTypes.DATE(6),
			allowNull: false,
			defaultValue: sequelize.fn('NOW')
		},
	  }, {
		timestamps: false,
		underscored: true,
		tableName : 'log_riegos'	  
	});
};
