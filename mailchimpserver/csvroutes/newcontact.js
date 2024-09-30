// Backend: CSV Upload Route for NewContact
import express from "express";
import multer from "multer";
import csv from "csv-parser";
import NewContact from "../models/contactmodel.js"; // Ensure you have the correct path to your model
import { Stream } from "stream";

const router = express.Router();

// Multer setup for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle CSV upload
router.post("/upload-contacts", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const results = [];
    const fileBuffer = req.file.buffer.toString("utf8");
    const readableStream = Stream.Readable.from(fileBuffer.split("\n"));
    const csvParser = csv();

    await new Promise((resolve, reject) => {
      readableStream
        .pipe(csvParser)
        .on("data", (data) => {
          // Data mapping
          const formattedData = {
            emailaddress: data.emailaddress || "",
            firstname: data.firstname || "",
            lastname: data.lastname || "",
            address: data.address || "",
            phonenumber: data.phonenumber || "",
            birthday: data.birthday || "",
            tags: data.tags || "",
            emailmarkting: data.emailmarkting || "",
            source: data.source || "",
            contactrating: data.contactrating || "",
          };
          results.push(formattedData);
        })
        .on("end", resolve)
        .on("error", reject);
    });

    // Insert data into the database
    await NewContact.insertMany(results);

    res.status(200).json({
      success: true,
      message: "Contacts data successfully uploaded",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error inserting data",
      error: error.message,
    });
  }
});

export default router;
