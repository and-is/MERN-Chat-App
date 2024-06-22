import express from "express";
import { registerUser, authUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/login", authUser);
router.route("/").post(registerUser);

export default router;
