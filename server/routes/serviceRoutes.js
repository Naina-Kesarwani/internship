import express from "express";

import {
  createService,
  getServices,
  updateService,
  updateServiceStatus,
  deleteService,
  getPublishedServices,
} from "../controllers/serviceController.js";



const router = express.Router();

// Create a service
router.post("/", createService);

// Get all services
router.get("/", getServices);

router.get("/published", getPublishedServices);

router.put("/:id", updateService);

// Update service status
router.patch("/:id/status", updateServiceStatus);

router.delete("/:id", deleteService);





export default router;