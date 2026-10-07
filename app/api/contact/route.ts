import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactForm } from "@/db/schema";
import {
  contactFormZodSchema,
} from "@/schema/contacSchema";
import { sendContactNotification } from "@/lib/contactNotification";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedData = contactFormZodSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { errors: validatedData.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const [newEntry] = await db
      .insert(contactForm)
      .values(validatedData.data)
      .returning();

    if (!newEntry) {
      throw new Error("The contact form insert returned no record.");
    }

    try {
      await sendContactNotification(validatedData.data);
      return NextResponse.json({ success: true, data: newEntry });
    } catch (error) {
      console.error(
        "Contact form was saved, but its email notification failed:",
        error,
      );
      return NextResponse.json({
        success: true,
        data: newEntry,
        warning: "The inquiry was saved, but its email notification could not be sent.",
      });
    }
  } catch (error) {
    console.error("Failed to save contact form submission:", error);
    return NextResponse.json(
      {
        errors: {
          form: ["Unable to save your inquiry. Please try again later."],
        },
      },
      { status: 500 },
    );
  }
}