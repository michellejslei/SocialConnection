import mongoose from "mongoose";
import {Schema} from "mongoose";

const userSchema = new Schema({
    name: String
});

const userModel = mongoose.models.userModel || mongoose.model("userModel", userSchema); 

export default userModel;