import mongoose from "mongoose";
import {Schema} from "mongoose";

const userSchema = new Schema({
    description: String,
    month: String,
    day: Number,
    year: Number,
    notes: String
});

const userModel = mongoose.models.userModel || mongoose.model("userModel", userSchema); 

export default userModel;

