const Faculty = require("../models/Faculty");

// CREATE FACULTY
const createFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.create(req.body);

        res.status(201).json({
            message: "Faculty created successfully",
            faculty
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating faculty",
            error: error.message
        });
    }
};


// GET ALL FACULTY
const getFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find();

        res.status(200).json({
            count: faculties.length,
            faculties
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching faculty",
            error: error.message
        });
    }
};


// GET FACULTY BY ID
const getFacultyById = async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);

        if (!faculty) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching faculty",
            error: error.message
        });
    }
};


// UPDATE FACULTY
const updateFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!faculty) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.status(200).json({
            message: "Faculty updated successfully",
            faculty
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating faculty",
            error: error.message
        });
    }
};


// DELETE FACULTY
const deleteFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndDelete(req.params.id);

        if (!faculty) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.status(200).json({
            message: "Faculty deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting faculty",
            error: error.message
        });
    }
};


module.exports = {
    createFaculty,
    getFaculties,
    getFacultyById,
    updateFaculty,
    deleteFaculty
};