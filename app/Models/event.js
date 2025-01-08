// Models/event.js
import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    eventTitle: String,
    eventDate: Date,
    eventStartingTime: String,
    eventLocation: String,
    eventEndingTIme: String,
    noOfPerson: Number,
    eventDescription: String,
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models?.events || mongoose.model("events", eventSchema);
export default Event;