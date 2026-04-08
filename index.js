require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"], credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("👤 Users API Running"));

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));