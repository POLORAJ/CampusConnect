const express = require("express");

const app = express();

const facultyRoutes = require("./routes/facultyRoutes");
const courseRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");
const testRoutes = require("./routes/testRoutes");
const sprint12StudentRoutes = require("./routes/sprint12StudentRoutes");

const requestLogger = require("./middleware/requestLogger");

app.use(express.json());

app.use(requestLogger);

app.get("/", (req, res) => {
    res.json({
        message: "Campus Connect API is running"
    });
});

app.use("/api/courses", courseRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/test", testRoutes);
app.use("/api/sprint12/students", sprint12StudentRoutes);


module.exports = app;