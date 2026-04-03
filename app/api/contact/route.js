import { connectDB } from "../../lib/mongodb";
import {Contact} from "../../models/Contact";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    // basic validation
    if (!name || !phone ) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    await Contact.create({
      name,
      phone,
      email,
      message,
    });

    return Response.json(
      { success: true, message: "Form submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);

    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}