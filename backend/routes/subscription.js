const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:token", (req, res) => {
  const token = req.params.token;

  const users = JSON.parse(
    fs.readFileSync("./users.json", "utf8")
  );

  const user = users.find(u => u.token === token);

  if (!user) {
    return res.status(404).json({
      error: "Invalid token"
    });
  }

  res.json({
    user: user.name,
    protocol: user.protocol,
    config: {
      type: "vmess",
      server: "cdn.example.com",
      port: 443,
      tls: true
    }
  });
});

module.exports = router;