const express = require("express");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");

const protect = require("./middleware/authMiddleware");
const authorize = require("./middleware/roleMiddleware");

app.get("/", (req, res) => {
    res.json({
        message: "Campus Connect API is running"
    });
});

app.use("/api/auth", authRoutes);

app.get(
    "/api/admin/dashboard",
    protect,
    authorize("admin"),
    (req, res) => {
        res.json({
            message: "Welcome to Admin Dashboard",
            user: req.user
        });
    }
);

module.exports = app;