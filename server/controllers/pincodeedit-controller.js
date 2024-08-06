const Pincode = require('../models/pincode-model')
const mongoose = require("mongoose"); // Ensure mongoose is imported if you're using mongoose functions

// Update Pincode data
const updatePincode = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const { country, state, district, pincode } = req.body; // Extract fields to update

        console.log("ID received:", id);

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the Pincode by ID and update the fields
        const updatedPincode = await Pincode.findByIdAndUpdate(
            id,                    // ID of the document to update
            { $set: {country, state, district, pincode} }, // Update operations
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        // Check if no document was found and updated
        if (!updatedPincode) {
            return res.status(404).json({ message: "Pincode not found" });
        }

        // Successfully updated
        res.status(200).json({ message: "Pincode updated successfully", data: updatedPincode });
    } catch (error) {
        // Log the error and return a server error status
        console.error("Error updating Pincode:", error);
        res.status(500).json({ message: "Error updating Pincode", error });
    }
};

module.exports = { updatePincode };
