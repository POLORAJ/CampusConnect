const express = require("express");

const app = express();

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Campus Connect API is running"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);

module.exports = app;