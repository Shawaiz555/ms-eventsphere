import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email is invalid",
    ],
  },
  message: { type: String, required: true },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
export default Contact;
