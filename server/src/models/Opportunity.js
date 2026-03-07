module.exports = sequelize => {
  const { DataTypes } = require('sequelize');
  return sequelize.define('Opportunity', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ngo_id: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    required_skills: { type: DataTypes.JSON, defaultValue: [] },
    duration: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
    status: { type: DataTypes.ENUM('open','closed'), defaultValue: 'open' }
  });
};