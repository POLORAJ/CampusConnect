const express = require("express");

const router = express.Router();

const {
    createFaculty,
    getFaculties,
    getFacultyById,
    updateFaculty,
    deleteFaculty
} = require("../controllers/facultyController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");


// CREATE
router.post(
    "/",
    protect,
    authorize("admin"),
    createFaculty
);


// GET ALL
router.get(
    "/",
    protect,
    authorize("admin"),
    getFaculties
);


// GET BY ID
router.get(
    "/:id",
    protect,
    authorize("admin"),
    getFacultyById
);


// UPDATE
router.put(
    "/:id",
    protect,
    authorize("admin"),
    updateFaculty
);


// DELETE
router.delete(
    "/:id",
    protect,
    authorize("admin"),
    deleteFaculty
);


module.exports = router;