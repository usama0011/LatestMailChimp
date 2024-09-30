// routes/contactRoutes.js
import express from "express";
import multer from "multer";
import csv from "csv-parser";
import Contact from "../models/contactmodel.js";
import { Stream } from "stream";

const router = express.Router();

// Multer setup for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle CSV upload for contacts
router.post("/uploadContacts", upload.single("file"), async (req, res) => {
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
          // Modify data as needed (e.g., parsing numeric fields)
          results.push({
            emailaddress: data.emailaddress,
            firstname: data.firstname,
            lastname: data.lastname,
            address: data.address,
            phonenumber: data.phonenumber,
            birthday: data.birthday,
            tags: data.tags,
            emailmarkting: data.emailmarkting,
            source: data.source,
            contactrating: data.contactrating,
          });
        })
        .on("end", resolve)
        .on("error", reject);
    });

    console.log("Inserting contacts:", results);

    // Insert the parsed data into the MongoDB collection
    await Contact.insertMany(results);

    res.status(200).json({
      success: true,
      message: "Contacts data successfully uploaded",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Error inserting contacts data",
      errormsg: error.message,
    });
  }
});
// Route to get all contacts
router.get("/getAllContacts", async (req, res) => {
  try {
    const contacts = await Contact.find(); // Fetch all contacts from the database
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching contacts",
      errormsg: error.message,
    });
  }
});
export default router;
