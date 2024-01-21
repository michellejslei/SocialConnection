import mongoose from "mongoose"

 const connectToDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://funger:goalie@cluster0.lb5eviq.mongodb.net/social_db");

    } catch (error) {
        console.log("Failed to Connect to DB")
    }
}

export default connectToDB;