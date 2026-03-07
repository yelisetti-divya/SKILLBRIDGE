const { Message } = require('../models');

exports.send = async (req, res) => {
  const msg = await Message.create({
    sender_id: req.user.id,
    receiver_id: req.body.receiver_id,
    content: req.body.content
  });
  res.json(msg);
};

exports.conversation = async (req, res) => {
  const msgs = await Message.findAll({
    where: {
      [require('sequelize').Op.or]: [
        { sender_id: req.user.id, receiver_id: req.params.otherId },
        { sender_id: req.params.otherId, receiver_id: req.user.id }
      ]
    },
    order: [['timestamp', 'ASC']]
  });
  res.json(msgs);
};