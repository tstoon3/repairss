import express from "express";
import { getUsers } from "../controllers/controllers_users.js";

const router = express.Router();

router.get("/Users",getUsers);

export default router;