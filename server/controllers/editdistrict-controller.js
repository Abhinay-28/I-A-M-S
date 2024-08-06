const District = require('../models/district-model')
const mongoose = require("mongoose"); // Ensure mongoose is imported if you're using mongoose functions

// Update State data
const updateDistrict = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const { country, state, district, State } = req.body; // Extract fields to update

        console.log("ID received:", id);

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the State by ID and update the fields
        const updatedDistrict = await District.findByIdAndUpdate(
            id,                    // ID of the document to update
            { $set: { country, state, district, State } }, // Update operations
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        // Check if no document was found and updated
        if (!updatedDistrict) {
            return res.status(404).json({ message: "State not found" });
        }

        // Successfully updated
        res.status(200).json({ message: "State updated successfully", data: updatedDistrict });
    } catch (error) {
        // Log the error and return a server error status
        console.error("Error updating District:", error);
        res.status(500).json({ message: "Error updating District", error });
    }
};

module.exports = { updateDistrict };
