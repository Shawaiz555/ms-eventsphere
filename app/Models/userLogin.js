import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: true },
  role: { type: String, required: true, select: true },
});

// Explicitly set the collection name
userSchema.set("collection", "userLogin");

const userLogin =
  mongoose.models.userLogin || mongoose.model("userLogin", userSchema);

export default userLogin;
