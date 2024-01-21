
import {nextResponse} from "next/server"
import connectToDB from "/Users/evanfung/SocialConnection/social-app/model/mongodb.js"
import userModel from "/Users/evanfung/SocialConnection/social-app/model/userSchema.js"

export async function POST(request) {
    const {description, month, day, year, notes} = await request.json();
    await connectToDB();
    await userModel.create({description, month, day, year, notes});
    return nextResponse.json({message: "Task added"})
}

export async function GET() {
    await connectToDB();
    const task = await userModel.find()
    return NextResponse.json({task})

}

