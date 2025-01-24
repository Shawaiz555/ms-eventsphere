// app/api/auth/signup/route.js
import User from "@/app/Models/userLogin";
import Admin from "@/app/Models/adminLogin";
import { connectDB } from "@/app/lib/MongoConfig";
import bcrypt from "bcryptjs"; // For hashing passwords
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, password, role } = await req.json();
  await connectDB();
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(role)
  try {
    // Parse JSON data from the request body
    
    
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    if (role === "admin") {
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return NextResponse.json(
          { message: "Admin already exists" },
          { status: 400 }
        );
      }

      const newAdmin = new Admin({
        name,
        email,
        password: hashedPassword,
        role,
      });
      await newAdmin.save();
      return NextResponse.json(
        { message: "Admin registered successfully!" },
        { status: 201 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in signup:", error);
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
