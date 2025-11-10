import express from "express";
import LoginController from "../controllers/loginController.js";

const router = express.Router();

router.post('/login', LoginController.login);
router.post('/signup', LoginController.signup);

export default router;