import express from "express";
const router = express.Router();
import Inquiry from "../models/Inquiry.js";
import upload from "../middleware/upload.js";



router.post("/", upload.single("resume"), async (req, res) => {
  try {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const inquiry = new Inquiry({
      ...req.body,
      services: req.body.services
        ? JSON.parse(req.body.services)
        : [],
      resume: req.file ? req.file.path : "",
    });

    await inquiry.save();

    res.status(201).json({
      success: true,
      message: "Inquiry saved successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({
      createdAt: -1,
    });

    res.status(200).json(inquiries);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedInquiry = await Inquiry.findByIdAndDelete(id);

    if (!deletedInquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.json({ message: "Inquiry deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;