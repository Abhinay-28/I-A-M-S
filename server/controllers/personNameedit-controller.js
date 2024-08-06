const PersonName = require('../models/PersonName-model')
const mongoose = require("mongoose"); // Ensure mongoose is imported if you're using mongoose functions

// Update Pincode data
const updateName = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const { names,email,password,phone,address,country, state,city, district, pincode } = req.body; // Extract fields to update

        console.log("ID received:", id);

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the Pincode by ID and update the fields
        const updatedName = await PersonName.findByIdAndUpdate(
            id,                    // ID of the document to update
            { $set: {names,email,password,phone,address,country, state,city, district, pincode} }, // Update operations
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        // Check if no document was found and updated
        if (!updatedName) {
            return res.status(404).json({ message: "name not found" });
        }

        // Successfully updated
        res.status(200).json({ message: "NAME updated successfully", data: updatedName });
    } catch (error) {
        // Log the error and return a server error status
        console.error("Error updating Pincode:", error);
        res.status(500).json({ message: "Error updating Pincode", error });
    }
};

module.exports = { updateName };
