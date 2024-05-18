import express from "express";
import {
  addToPlaylist,
  changePassword,
  forgetPassword,
  login,
  logout,
  myProfile,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
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
router.route("/changepassword").put(isAuthenticated, changePassword);
//updateprofile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//updateprofilepicture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);
//forget password
router.route("/forgetpassword").post(forgetPassword);
//reset password
router.route("/resetpassword/:token").put(resetPassword);
//add to playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
//remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);
export default router;
