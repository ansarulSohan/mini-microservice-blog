const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
  const event = req.body;
  await axios.post("http://localhost:3001/events", event);
  await axios.post("http://localhost:3002/events", event);
  await axios.post("http://localhost:3003/events", event);

  console.log("status ok");
  res.send({ status: "OK" });
});

app.listen(3005, () => {
  console.log("Event bus running on port 3005");
});
