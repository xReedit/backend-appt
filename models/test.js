/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('test', {
		idtest: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		descripcion: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'test'
	});
};