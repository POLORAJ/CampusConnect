// Sprint 12 demo controller
// These endpoints are only for testing Express routing and middleware.

const getStudents = (req, res) => {
  res.status(200).json({
    message: "Students fetched successfully",
    students: [
      {
        id: 1,
        name: "Rahul",
        course: "B.Tech CSE"
      },
      {
        id: 2,
        name: "Priya",
        course: "B.Tech CSE"
      }
    ]
  });
};

const getStudentById = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Student fetched successfully",
    studentId: id
  });
};

const createStudent = (req, res) => {
  res.status(201).json({
    message: "Student created successfully",
    student: req.body
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Student updated successfully",
    studentId: id,
    updatedData: req.body
  });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Student deleted successfully",
    deletedStudentId: id
  });
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};