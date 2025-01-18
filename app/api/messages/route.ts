import prisma from "@/prisma/db";

export async function GET() {
  try {
    const customers = await prisma.customer.findMany();
    return new Response(JSON.stringify(customers), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
      // @ts-ignore
      body: JSON.stringify({
        message: "Internal Server Error",
        // @ts-ignore
        error: error.message,
      }),
    });
  }
}
