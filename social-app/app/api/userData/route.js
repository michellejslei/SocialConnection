
import connectToDB from "./model/mongodb.js"
import userModel from "./model/userSchema"

export async function POST(request) {
    const {name} = await request.json();
    await connectToDB();
    await userModel.create({name});
}

export async function GET() {
    await connectToDB();
    const {name} = userModel.find();

}

