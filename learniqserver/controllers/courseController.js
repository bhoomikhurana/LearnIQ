import { Course } from "../models/Course.js";

export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).send({
      success: true,
      courses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updating Order",
      error,
    });
  }
};
