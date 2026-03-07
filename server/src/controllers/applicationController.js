const { Application } = require('../models');

exports.apply = async (req, res) => {
  const app = await Application.create({
    opportunity_id: req.params.opportunityId,
    volunteer_id: req.user.id
  });
  res.json(app);
};

exports.updateStatus = async (req, res) => {
  const app = await Application.findByPk(req.params.id);
  await app.update({ status: req.body.status });
  res.json(app);
};

exports.list = async (req, res) => {
  const apps = await Application.findAll({ where: req.query });
  res.json(apps);
};