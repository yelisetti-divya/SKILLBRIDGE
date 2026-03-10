import Opportunity from "../models/Opportunity.js";

export async function createOpportunity(req, res) {
  const data = req.body;

  const opp = await Opportunity.create({
    ...data,
    ngoId: req.user.id
  });

  res.json(opp);
}

export async function getAll(req, res) {
  const list = await Opportunity.find();
  res.json(list);
}