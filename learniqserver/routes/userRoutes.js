import express from "express";
import {
  login,
  logout,
  myProfile,
  register,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.route("/register").post(register);
//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);
//get my profile
router.route("/me").get(isAuthenticated, myProfile);
//change password
//updateprofile
//updateprofilepicture
//forget password
//reset password
//add to playlist
//remove from playlist
export default router;
