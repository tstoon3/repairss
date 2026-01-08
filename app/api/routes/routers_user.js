import express from "express";
import { getUsers, postUserid } from "../controllers/controllers_users.js";

const router = express.Router();

router.get("/getusers",getUsers);
router.post("/postuserid",postUserid);

export default router;