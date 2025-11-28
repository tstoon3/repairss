import express from "express";
import { getRepairs,postRepairs } from "../controllers/controllers_case.js";

const router = express.Router();

router.get("/getrepairs", getRepairs);
router.post("/postrepairs", postRepairs);

export default router;