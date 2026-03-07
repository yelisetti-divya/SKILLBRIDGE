const { Opportunity } = require('../models');

exports.create = async (req, res) => {
  const opp = await Opportunity.create({ ngo_id: req.user.id, ...req.body });
  res.json(opp);
};

exports.list = async (req, res) => {
  const list = await Opportunity.findAll({ where: req.query });
  res.json(list);
};

exports.get = async (req, res) => {
  const opp = await Opportunity.findByPk(req.params.id);
  res.json(opp);
};

exports.update = async (req, res) => {
  const opp = await Opportunity.findByPk(req.params.id);
  await opp.update(req.body);
  res.json(opp);
};

exports.remove = async (req, res) => {
  const opp = await Opportunity.findByPk(req.params.id);
  await opp.destroy();
  res.json({ success: true });
};