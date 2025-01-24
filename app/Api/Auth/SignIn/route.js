import User from "@/app/Models/userLogin";
import Admin from "@/app/Models/adminLogin";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/lib/MongoConfig";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const password = searchParams.get("password");

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    await connectDB();

    let user = await Admin.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 400 }
        );
      }
      // If credentials are valid
      return NextResponse.json(
        { message: "Sign-in successful", role: "admin" }, // Return admin role
        { status: 200 }
      );
    }

    user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 400 }
        );
      }
      // If credentials are valid
      return NextResponse.json(
        { message: "Sign-in successful", role: "user" }, // Return user role
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error in signin:", error);
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
