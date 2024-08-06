const Member = require('../models/member-model')
const mongoose = require("mongoose"); // Ensure mongoose is imported if you're using mongoose functions

// Update State data
const updateMember = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const { UserNo, UserName, UserEmail, UserPincode, created_by,Edited_by } = req.body; // Extract fields to update

        console.log("ID received:", id);

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the State by ID and update the fields
        const updatedMember = await Member.findByIdAndUpdate(
            id,                    // ID of the document to update
            { $set: {UserNo, UserName, UserEmail, UserPincode,created_by,Edited_by } }, // Update operations
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        // Check if no document was found and updated
        if (!updatedMember) {
            return res.status(404).json({ message: "State not found" });
        }

        // Successfully updated
        res.status(200).json({ message: "State updated successfully", data: updatedMember });
    } catch (error) {
        // Log the error and return a server error status
        console.error("Error updating member:", error);
        res.status(500).json({ message: "Error updating member", error });
    }
};

module.exports = { updateMember };
