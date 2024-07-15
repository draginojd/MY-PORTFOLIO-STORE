const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

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
