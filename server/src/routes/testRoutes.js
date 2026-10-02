const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Campus Connect backend is working successfully!",
  });
});

module.exports = router;