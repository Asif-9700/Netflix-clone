import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,  // ✅ Fixed spelling
    },
    email: {
        type: String,
        required: true,  // ✅ Fixed spelling
        unique: true,    // ✅ Prevents duplicate emails
    },
    password: {
        type: String,
        required: true,  // ✅ Fixed spelling
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema); // ✅ Corrected model registration

export default User; // ✅ Exporting properly
