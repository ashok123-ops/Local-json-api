const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ ok: true, service: "localConfig test API", status: "running" });
});

// Safe test endpoint only: echoes whether a parameter was supplied.
// It does not unban accounts or modify any game/account data.
app.get("/id", (req, res) => {
  const supplied = typeof req.query.unben === "string" && req.query.unben.length > 0;
  res.json({
    ok: true,
    mode: "test",
    parameterReceived: supplied,
    message: "Test endpoint reached successfully. This is not an account-unban service."
  });
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Test API listening on port ${port}`);
});
