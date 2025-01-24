
import User from "@/app/Models/userLogin";
import Admin from "@/app/Models/adminLogin";
import bcrypt from "bcryptjs"; // For comparing passwords
import { connectDB } from "@/app/lib/MongoConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();
console.log(email);
console.log(password);
console.log(role);
    if (!email || !password || !role) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    let user;
    if (role === "admin") {
      user = await Admin.findOne({ email });
    } else {
      user = await User.findOne({ email });
    }
console.log(user);
    if (!user) {
      return NextResponse.json(
        { message: "User/Admin not found" },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    // User found and password matched, return success
    return NextResponse.json(
      { message: "Sign-in successful", role },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in signin:", error);
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

