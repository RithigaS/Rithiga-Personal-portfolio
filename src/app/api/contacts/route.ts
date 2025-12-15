import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sendContactEmail } from "@/lib/email";
import { auth } from "@/auth";

// GET - Fetch all contacts (admin only)
export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  try {
    const contacts = await Contact.find({}).sort({ submittedAt: -1 });
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Fetch contacts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

// POST - Submit new contact (public)
export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email" },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      subject: subject || "",
      message,
    });

    // Send email notification
    const emailResult = await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    if (!emailResult.success) {
      console.error("Email notification failed:", emailResult.error);
      return NextResponse.json(
        {
          error:
            "Message saved, but failed to send email. Please try again or email directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Thank you for your message!" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Contact submission error:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { error: "Please fill all required fields correctly" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
