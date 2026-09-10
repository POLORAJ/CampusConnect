import { useState } from "react";

function StudentRegistration() {
  // Form state
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    course: "",
    semester: "",
    studentId: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Success message
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error when user starts correcting the field
    setErrors({
      ...errors,
      [name]: "",
    });

    // Remove success message when editing again
    setSuccess("");
  };

  // Validate and submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Student Name validation
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required.";
    } else if (formData.studentName.trim().length < 2) {
      newErrors.studentName = "Student name must contain at least 2 characters.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits.";
    }

    // Course validation
    if (!formData.course.trim()) {
      newErrors.course = "Course is required.";
    }

    // Semester validation
    if (!formData.semester.trim()) {
      newErrors.semester = "Semester is required.";
    } else if (
      !/^[1-8]$/.test(formData.semester)
    ) {
      newErrors.semester = "Semester must be between 1 and 8.";
    }

    // Student ID validation
    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required.";
    }

    // Store errors
    setErrors(newErrors);

    // If there are no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Student Data:", formData);

      setSuccess("Student registered successfully!");

      // Reset form after successful submission
      setFormData({
        studentName: "",
        email: "",
        phone: "",
        course: "",
        semester: "",
        studentId: "",
      });
    }
  };

  // Reset form manually
  const handleReset = () => {
    setFormData({
      studentName: "",
      email: "",
      phone: "",
      course: "",
      semester: "",
      studentId: "",
    });

    setErrors({});
    setSuccess("");
  };

  return (
    <div className="form-container">
      <h1>Student Registration</h1>

      <p>Enter the student's details below.</p>

      <form onSubmit={handleSubmit}>

        {/* Student Name */}
        <label>Student Name *</label>

        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Enter student name"
        />

        {errors.studentName && (
          <p className="error">{errors.studentName}</p>
        )}


        {/* Email */}
        <label>Email *</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}


        {/* Phone */}
        <label>Phone *</label>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter 10-digit phone number"
        />

        {errors.phone && (
          <p className="error">{errors.phone}</p>
        )}


        {/* Course */}
        <label>Course *</label>

        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter course name"
        />

        {errors.course && (
          <p className="error">{errors.course}</p>
        )}


        {/* Semester */}
        <label>Semester *</label>

        <input
          type="text"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          placeholder="Enter semester (1-8)"
        />

        {errors.semester && (
          <p className="error">{errors.semester}</p>
        )}


        {/* Student ID */}
        <label>Student ID *</label>

        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          placeholder="Enter student ID"
        />

        {errors.studentId && (
          <p className="error">{errors.studentId}</p>
        )}


        {/* Buttons */}
        <button type="submit">
          Submit
        </button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>

      </form>

      {/* Success Message */}
      {success && (
        <p className="success">{success}</p>
      )}
    </div>
  );
}

export default StudentRegistration;