// routes/campaigns.js
import express from "express";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import LargeCampaign from "../models/LargeModel.js"; // Adjust the path based on your project structure

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files

// Route to upload CSV
router.post("/upload", upload.single("file"), (req, res) => {
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      // Save to database
      try {
        await LargeCampaign.insertMany(results);
        res
          .status(200)
          .json({ message: "CSV data uploaded successfully", data: results });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error saving data to the database", error });
      } finally {
        fs.unlinkSync(req.file.path); // Remove the temporary file
      }
    });
});
// Route to view all data
router.get("/view", async (req, res) => {
  try {
    const campaigns = await LargeCampaign.find({});
    res.status(200).json(campaigns);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving data from the database", error });
  }
});

// Route to view a single campaign by ID
router.get("/view/:id", async (req, res) => {
  const { id } = req.params; // Extract ID from request parameters

  try {
    const campaign = await LargeCampaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.status(200).json(campaign);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving campaign from the database", error });
  }
});
export default router;
