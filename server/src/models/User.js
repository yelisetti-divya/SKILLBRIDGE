module.exports = sequelize => {
  const { DataTypes } = require('sequelize');
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('volunteer', 'ngo'), allowNull: false },
    skills: { type: DataTypes.JSON, defaultValue: [] },
    location: { type: DataTypes.STRING },
    bio: { type: DataTypes.TEXT },
    organization_name: { type: DataTypes.STRING },
    organization_description: { type: DataTypes.TEXT },
    website_url: { type: DataTypes.STRING }
  });
};