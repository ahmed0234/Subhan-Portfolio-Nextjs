"use server";

import prisma from "@/prisma/db"; // Ensure this path is correct

export async function deleteMessage(id: string) {
  const customer = await prisma.customer.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    },
  });
  if (customer) {
    await prisma.customer.delete({
      where: {
        id: id,
      },
    });
    return {
      success: true,
      message: "Customer deleted successfully",
      customer: customer,
    };
  }
}
