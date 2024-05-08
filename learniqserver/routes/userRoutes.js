import express from "express";
import { login, logout, register } from "../controllers/userController.js";
const router = express.Router();

router.route("/register").post(register);
//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);
//get my profile
//change password
//updateprofile
//updateprofilepicture
//forget password
//reset password
//add to playlist
//remove from playlist
export default router;
