const City = require("../models/city-model");
const mongoose = require("mongoose"); // Ensure mongoose is imported if you're using mongoose functions

// Update city data
const updateCity = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const { country, state, district, city } = req.body; // Extract fields to update

        console.log("ID received:", id);

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the city by ID and update the fields
        const updatedCity = await City.findByIdAndUpdate(
            id,                    // ID of the document to update
            { $set: { country, state, district, city } }, // Update operations
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        // Check if no document was found and updated
        if (!updatedCity) {
            return res.status(404).json({ message: "City not found" });
        }

        // Successfully updated
        res.status(200).json({ message: "City updated successfully", data: updatedCity });
    } catch (error) {
        // Log the error and return a server error status
        console.error("Error updating city:", error);
        res.status(500).json({ message: "Error updating city", error });
    }
};

module.exports = { updateCity };
