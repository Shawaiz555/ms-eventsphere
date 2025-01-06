"use server";
import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/MongoConfig";
import { ObjectId } from "mongodb";
import Event from "@/app/Models/event";
import upload from "@/app/Middleware/multer";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  await connectDB();
  let collection = [];
  if (!id) {
    collection = await Event.find({});
  } else {
    collection = await Event.find({ _id: new ObjectId(id) });
  }
  return NextResponse.json({ data: collection });
}

export async function POST(req) {
  await connectDB();

  const form = new Promise((resolve, reject) => {
    upload.single("image")(req, {}, (err) => {
      if (err) return reject(err);
      resolve(req);
    });
  });

  try {
    const requestWithFile = await form;
    const { name, email, eventTitle, eventDate, eventTime, eventLocation, eventDuration, noOfPerson, eventDescription } =
      requestWithFile.body;

    const newEvent = new Event({
      name,
      email,
      eventTitle,
      eventDate,
      eventTime,
      eventLocation,
      eventDuration,
      noOfPerson,
      eventDescription,
    });

    if (requestWithFile.file) {
      newEvent.image = {
        data: requestWithFile.file.buffer,
        contentType: requestWithFile.file.mimetype,
      };
    }

    const savedEvent = await newEvent.save();
    return NextResponse.json({ message: "Event created", data: savedEvent });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error creating event", error });
  }
}

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "id is required", status: 400 });
  }

  await connectDB();

  const form = new Promise((resolve, reject) => {
    upload.single("image")(req, {}, (err) => {
      if (err) return reject(err);
      resolve(req);
    });
  });

  try {
    const requestWithFile = await form;
    const updatedData = JSON.parse(requestWithFile.body);

    if (requestWithFile.file) {
      updatedData.image = {
        data: requestWithFile.file.buffer,
        contentType: requestWithFile.file.mimetype,
      };
    }

    const updatedEvent = await Event.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updatedData },
      { new: true }
    );

    return NextResponse.json({
      message: `Event with ${id} is updated successfully`,
      data: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error updating event", error });
  }
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "id is required", status: 400 });
  }

  await connectDB();

  try {
    const deletedEvent = await Event.findOneAndDelete({ _id: new ObjectId(id) });
    return NextResponse.json({
      message: `Event with ${id} is deleted successfully`,
      data: deletedEvent,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error deleting event", error });
  }
}
