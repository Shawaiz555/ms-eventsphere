// Models/event.js
import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    email: { type: String, required: true },
    eventTitle: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventStartingTime: { type: String, required: true },
    eventEndingTime: { type: String, required: true },
    eventLocation: { type: String, required: true },
    noOfPerson: { type: Number, required: true },
    eventDescription: { type: String, required: true },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models?.event || mongoose.model("event", eventSchema);
export default Event;