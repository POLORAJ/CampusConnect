const express = require("express");

const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Create student - Admin only
router.post(
  "/",
  protect,
  authorize("admin"),
  createStudent
);

// Get all students - Admin only
router.get(
  "/",
  protect,
  authorize("admin"),
  getStudents
);

// Get student by ID - Admin only
router.get(
  "/:id",
  protect,
  authorize("admin"),
  getStudentById
);
// Update student - Admin only
router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateStudent
);

// Delete student - Admin only
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteStudent
);
module.exports = router;