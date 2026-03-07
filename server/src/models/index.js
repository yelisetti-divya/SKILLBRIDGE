const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_CONNECTION || 'sqlite::memory:');

const User = require('./User')(sequelize);
const Opportunity = require('./Opportunity')(sequelize);
const Application = require('./Application')(sequelize);
const Message = require('./Message')(sequelize);

User.hasMany(Opportunity, { foreignKey: 'ngo_id' });
Opportunity.belongsTo(User, { as: 'ngo', foreignKey: 'ngo_id' });

Opportunity.hasMany(Application, { foreignKey: 'opportunity_id' });
Application.belongsTo(Opportunity, { foreignKey: 'opportunity_id' });

User.hasMany(Application, { foreignKey: 'volunteer_id' });
Application.belongsTo(User, { as: 'volunteer', foreignKey: 'volunteer_id' });

User.hasMany(Message, { foreignKey: 'sender_id' });
User.hasMany(Message, { foreignKey: 'receiver_id' });

module.exports = { sequelize, User, Opportunity, Application, Message };