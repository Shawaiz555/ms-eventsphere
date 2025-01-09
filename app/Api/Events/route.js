// "use server";
import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/MongoConfig";
import { ObjectId } from "mongodb";
import Event from "@/app/Models/event";
import upload from "@/app/Middleware/multer";
import formidable from 'formidable';


// Disable Next.js built-in body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Parse the request using formidable
async function parseForm(req) {
  const form = formidable({
    uploadDir: './uploads', // Directory for uploaded files
    keepExtensions: true,  // Preserve file extensions
    multiples: false,      // Allow single file uploads
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      resolve({ fields, files });
    });
  });
}

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
  try {
    // Connect to the database
    await connectDB();

    // Parse the incoming request with formidable
    const { fields, files } = await parseForm(req);

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "eventTitle",
      "eventDate",
      "eventStartingTime",
      "eventEndingTime",
      "eventLocation",
      "noOfPerson",
      "eventDescription",
    ];

    for (const field of requiredFields) {
      if (!fields[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    // Save file information
    let image = null;
    if (files.image) {
      image = {
        data: fs.readFileSync(files.image.filepath),
        contentType: files.image.mimetype,
      };
    }

    // Create a new event
    const event = new Event({
      name: fields.name,
      email: fields.email,
      eventTitle: fields.eventTitle,
      eventDate: new Date(fields.eventDate),
      eventStartingTime: fields.eventStartingTime,
      eventEndingTime: fields.eventEndingTime,
      eventLocation: fields.eventLocation,
      noOfPerson: parseInt(fields.noOfPerson),
      eventDescription: fields.eventDescription,
      image,
    });

    await event.save();

    return NextResponse.json({ message: "Event created successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
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
