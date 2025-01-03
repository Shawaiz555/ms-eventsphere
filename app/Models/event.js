import mongoose, { Schema} from "mongoose";

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
    eventTime: String,
    eventLocation: String,
    eventDuration: String,
    noOfPerson: Number,
    eventDescription: String,
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models?.Event || mongoose.model("events", eventSchema);
export default Event;
