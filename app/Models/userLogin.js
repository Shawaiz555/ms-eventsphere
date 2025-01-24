import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Explicitly set the collection name
userSchema.set("collection", "userLogin");

const userLogin =
  mongoose.models.userLogin || mongoose.model("userLogin", userSchema);

export default userLogin;
