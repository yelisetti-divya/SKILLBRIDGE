module.exports = sequelize => {
  const { DataTypes } = require('sequelize');
  return sequelize.define('Application', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    opportunity_id: { type: DataTypes.INTEGER, allowNull: false },
    volunteer_id: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.ENUM('pending','accepted','rejected'), defaultValue: 'pending' }
  });
};