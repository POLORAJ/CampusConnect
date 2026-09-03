const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} = require("../controllers/courseController");


// CREATE COURSE
router.post(
    "/",
    protect,
    authorize("admin"),
    createCourse
);


// GET ALL COURSES
router.get(
    "/",
    protect,
    getCourses
);


// GET COURSE BY ID
router.get(
    "/:id",
    protect,
    getCourseById
);


// UPDATE COURSE
router.put(
    "/:id",
    protect,
    authorize("admin"),
    updateCourse
);


// DELETE COURSE
router.delete(
    "/:id",
    protect,
    authorize("admin"),
    deleteCourse
);


module.exports = router;