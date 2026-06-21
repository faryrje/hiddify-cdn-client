const express = require("express");
const app = express();
const subscription = require("./routes/subscription");
app.get("/config", (req, res) => {
  res.json({
    version: "1.0",
    cdn: [
      "https://cdn1.example.com/config.json",
      "https://cdn2.example.com/config.json",
      "https://origin.example.com/config.json"
    ]
  });
});

app.get("/config/:user", (req, res) => {
  res.json({
    user: req.params.user,
    protocol: "sing-box",
    outbound: {
      type: "vmess",
      server: "example.com",
      port: 443
    }
  });
});

app.use("/sub", subscription);app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});