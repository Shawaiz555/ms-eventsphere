import { connectDB } from "@/app/lib/MongoConfig";
import adminLogin from "@/app/Models/adminLogin";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const data = await req.json();

        await connectDB();
        // Validate required fields
        if (!data.name || !data.email || !data.password) {
            return NextResponse.json({ message: "Invalid payload", error: "Missing required fields" }, { status: 400 });
        }

        const result = await adminLogin.create(data); // Use create instead of insertMany
        return NextResponse.json({ message: "Data inserted successfully", data: result });
    }
    catch (error) {
        console.error("Error parsing JSON:", error.message);
        return NextResponse.json({ message: "Invalid JSON payload", error: error.message }, { status: 400 });
    }
}
