import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import newcompaingroute from "./routes/newcompaingroute.js";
import newmessagesroute from "./routes/newcontactroute.js";
import reportroute from "./routes/reportroute.js";
import fromroute from "./routes/fromroute.js";
import contactRoutes from "./routes/contactroute.js";
import campaignsRouter from "./csvroutes/largemodel.js";

const app = express();
dotenv.config();

try {
  await mongoose.connect(
    "mongodb+srv://abdulmoiz:abdulmoiz@cluster0.zwtqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database Connection Successfully!!");
} catch (error) {
  console.error("Error connecting to MongoDB:", error.message);
  process.exit(1); // Exit the process if unable to connect to MongoDB
}
// Allow specific origin
const corsOptions = {
  origin: "https://latest-mail-chimp-client.vercel.app",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests for all routes

app.use(express.json());
app.use(cookieParser());

// Define a simple route
app.get("/", (req, res) => {
  res.status(200).json("App Work 100% Latest MailChimp");
});

// Start router from here
app.use("/api/newcompaing", newcompaingroute);
app.use("/api/newcontact", newmessagesroute);
app.use("/api/reports", reportroute);
app.use("/api/from", fromroute);
app.use("/api/contacts", contactRoutes);
app.use("/api/largecampaigns", campaignsRouter);

// Error handling middleware
// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res
    .status(500)
    .json({ error: "Internal Server Error", message: err.message });
});

// Start the server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
