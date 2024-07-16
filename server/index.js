const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  res.send("Hello from the server YES Armin!");
});

app.listen(port, () => {
  console.log("Server Activated");
  console.log(`Server listening on http://localhost:${port}`);
});
