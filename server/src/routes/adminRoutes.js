const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Admin dashboard
router.get(
    "/dashboard",
    protect,
    authorize("admin"),
    (req, res) => {
        res.json({
            message: "Welcome to Admin Dashboard",
            user: req.user
        });
    }
);

module.exports = router;