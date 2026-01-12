import express from "express";
import { getUsers, postUser, postUserid } from "../controllers/controllers_users.js";

const router = express.Router();

router.get("/getusers",getUsers);
router.post("/postuserid",postUserid);
router.post("/postdetailuser",postUser);

export default router;