const { User } = require('../models');

exports.getProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  await user.update(req.body);
  res.json(user);
};