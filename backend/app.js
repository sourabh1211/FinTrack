const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// base route
app.get("/", (req, res) => {
  res.send("Hello, backend is perfectly run");
});

// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

// 🛠 FIXED: Await DB before listening
const server = async () => {
  try {
    await db(); // wait for DB connection to finish
    app.listen(PORT, () => {
      console.log("🚀 Listening to port:", PORT);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

server();
