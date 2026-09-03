const Course = require("../models/Course");

// CREATE COURSE
const createCourse = async (req, res) => {
    try {
        const { courseCode, courseName, department, faculty, credits } = req.body;

        const course = await Course.create({
            courseCode,
            courseName,
            department,
            faculty,
            credits
        });

        res.status(201).json({
            message: "Course created successfully",
            course
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating course",
            error: error.message
        });
    }
};


// GET ALL COURSES
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        res.status(200).json({
            count: courses.length,
            courses
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching courses",
            error: error.message
        });
    }
};


// GET COURSE BY ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate("faculty");

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json(course);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching course",
            error: error.message
        });
    }
};


// UPDATE COURSE
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json({
            message: "Course updated successfully",
            course
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating course",
            error: error.message
        });
    }
};


// DELETE COURSE
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json({
            message: "Course deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting course",
            error: error.message
        });
    }
};


module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse
};