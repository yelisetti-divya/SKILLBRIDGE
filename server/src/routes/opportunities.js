import express from "express";
import auth from "../middleware/auth.js";
import { createOpportunity, getAll } from "../controllers/opportunityController.js";

const r = express.Router();

r.post("/", auth, createOpportunity);
r.get("/", getAll);

export default r;