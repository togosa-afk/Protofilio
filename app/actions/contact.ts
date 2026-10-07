"use server";

import { db } from "@/db";
import { contactForm } from "@/db/schema";
import {
  contactFormZodSchema,
  type ContactFormActionState,
} from "@/schema/contacSchema";
import { sendContactNotification } from "@/lib/contactNotification";

export const createContantForm = async (
  _prevState: ContactFormActionState,
  formData: FormData,
): Promise<ContactFormActionState> => {
  const validatedData = contactFormZodSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    budget: formData.get("budget"),
    projectDetails: formData.get("projectDetails"),
    description: formData.get("description"),
  });

  if (!validatedData.success) {
    return {
      success: false,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  try {
    const [newContactForm] = await db
      .insert(contactForm)
      .values(validatedData.data)
      .returning();

    if (!newContactForm) {
      throw new Error("The contact form insert returned no record.");
    }
  } catch (error) {
    console.error("Failed to save contact form submission:", error);
    return {
      success: false,
      errors: {
        form: ["Unable to save your inquiry. Please try again later."],
      },
    };
  }

  try {
    await sendContactNotification(validatedData.data);
    return {
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Contact form was saved, but its email notification failed:", error);
    return {
      success: true,
      warning:
        "Your inquiry was saved, but the email notification could not be sent. Please contact me directly if you need a quick response.",
      errors: {},
    };
  }
};
