import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import serviceRoutes from "./routes/serviceRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";

import connectDB from "./config/db.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Connect database
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));
app.use(express.json());

// Serve uploaded resumes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/services", serviceRoutes);
app.use("/api/inquiries", inquiryRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});