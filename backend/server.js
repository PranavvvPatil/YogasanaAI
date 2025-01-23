const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Contact = require("./models/Contact");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoURI = `mongodb+srv://neuspaarx:xOp7CpMj7I23kS4r@userdata.danlv.mongodb.net/?retryWrites=true&w=majority&appName=UserData`;
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    // Check if the error is due to an incorrect connection string
    if (err.code === "ENOTFOUND") {
      console.error("Invalid MongoDB connection string. Please check your environment variables.");
    } else {
      // Retry connection after 5 seconds
      setTimeout(() => {
        mongoose.connect(mongoURI);
      }, 5000);
    }
  });

// API endpoint to save contact form data
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate request body
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create a new contact document
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: "Contact data saved successfully!" });
  } catch (error) {
    console.error("Error saving contact data:", error);
    res.status(500).json({ error: "An error occurred while submitting the form. Please try again." });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});