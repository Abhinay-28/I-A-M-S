const Country = require("../models/country-model");
const mongoose = require("mongoose"); // Ensure mongoose is imported if you're using mongoose functions

// Update city data
const updateCountry = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const { country } = req.body; // Extract fields to update

        console.log("ID received:", id);

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the city by ID and update the fields
        const updatedCountry = await Country.findByIdAndUpdate(
            id,                    // ID of the document to update
            { $set: { country } }, // Update operations
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        // Check if no document was found and updated
        if (!updatedCountry) {
            return res.status(404).json({ message: "Country not found" });
        }

        // Successfully updated
        res.status(200).json({ message: "Country updated successfully", data: updatedCountry });
    } catch (error) {
        // Log the error and return a server error status
        console.error("Error updating Country:", error);
        res.status(500).json({ message: "Error updating Country", error });
    }
};

module.exports = { updateCountry };
