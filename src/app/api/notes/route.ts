import prisma from "@/lib/prisma";
import { asyncHandler } from "@/utils/asyncHandler";

async function getAllNotes() {
  const notes = await prisma.note.findMany();

  return Response.json(
    {
      message: "All Notes have been fetched successfully.",
      notes,
    },
    { status: 200 },
  );
}

async function saveNoteToDatabse(req: Request) {
  const content = (await req.formData()).get("content");

  // Validate that content is a string
  if (typeof content !== "string") {
    return Response.json(
      { message: "Content must be a string" },
      { status: 400 },
    );
  }

  // Create Note is mongodb
  const note = await prisma.note.create({
    data: {
      content: content,
    },
  });

  return Response.json(
    { message: "Your Note has been saved!", note },
    { status: 201 },
  );
}

// Wrap Functions in async handler to get rid of try-catch block everytime.
export const GET = asyncHandler(getAllNotes);
export const POST = asyncHandler(saveNoteToDatabse);
