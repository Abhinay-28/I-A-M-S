const User = require('../models/user-model')
const mongoose = require("mongoose"); // Ensure mongoose is imported if you're using mongoose functions

// Update State data
const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const {  username, email, phone } = req.body; // Extract fields to update

        console.log("ID received:", id);

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the State by ID and update the fields
        const updatedUser = await User.findByIdAndUpdate(
            id,                    // ID of the document to update
            { $set: {username, email, phone} }, // Update operations
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        // Check if no document was found and updated
        if (!updatedUser) {
            return res.status(404).json({ message: "Registered user not found" });
        }

        // Successfully updated
        res.status(200).json({ message: "Registered user  updated successfully", data: updatedUser });
    } catch (error) {
        // Log the error and return a server error status
        console.error("Error updating User:", error);
        res.status(500).json({ message: "Error updating User", error });
    }
};

module.exports = { updateUser };
