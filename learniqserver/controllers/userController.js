import catchAsyncError from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import crypto from "crypto";
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  // const file=req.file;
  if (!name || !email || !password)
    return next(new ErrorHandler("All fields are required", 400));
  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User already exists", 409));
  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "tempid",
      url: "tempurl",
    },
  });
  sendToken(res, user, "Registered Successfully", 201);
});
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorHandler("All fields are required", 400));
  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("Incorrect email or password", 401));
  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return next(new ErrorHandler("Incorrect email or password", 401));
  sendToken(res, user, `Welcome back, ${user.name}`, 200);
});
export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      //   secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});
export const myProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});
export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new ErrorHandler("All field are required", 400));
  const user = await User.findById(req.user._id).select("+password");
  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) return next(new ErrorHandler("Incorrect old password", 401));
  user.password = newPassword;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;
  const user = await User.findById(req.user._id);
  if (name) user.name = name;
  if (email) user.email = email;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
  });
});
export const updateProfilePicture = async (req, res, next) => {
  //Cloudinary
  res.status(200).json({
    success: true,
    message: "Profile picture updated successfully",
  });
};
export const forgetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return next(new ErrorHandler("User with this email is not found", 400));
  const resetToken = await user.getResetToken();
  await user.save();
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
  const message = `Click on the link to reset your password ${url}`;
  sendEmail(user.email, "LearnIQ Reset Password", message);
  res.status(200).json({
    success: true,
    message: `Reset token sent to ${user.email}`,
  });
});
export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params;
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });
  if (!user) return next(new ErrorHandler("Token is invalid or expired"));
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});
