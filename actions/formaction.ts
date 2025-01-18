"use server"; // Ensure this is used in a Server Action context

import prisma from "@/prisma/db"; // Ensure this path is correct

export async function FormAdmitter(form: FormData) {
  try {
    // Extract form data
    const firstName = form.get("first_name") as string;
    const lastName = form.get("last_name") as string;
    const email = form.get("email") as string;
    const phone = form.get("phone") as string;
    const service = form.get("service") as string;
    const message = form.get("message") as string;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service || !message) {
      throw new Error("All fields are required.");
    }

    // Create a new customer in the database
    const customer = await prisma.customer.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        service,
        message,
      },
    });

    return { success: true, customer }; // Return success and the created customer
  } catch (error) {
    console.error("Error creating customer:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred.",
    }; // Return error message
  }
}
