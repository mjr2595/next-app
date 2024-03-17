import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Jace" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the request body
  const body = await request.json();
  // If invalid, return a 400 response
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  // Fetch user with given id
  // If user not found, return a 404 response
  // simulated...
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Update user with given id
  // Return the updated user
  return NextResponse.json({ id, name: body.name });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  // Fetch user with given id
  // If user not found, return a 404 response
  // simulated...
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete user with given id
  // Return a 204 response
  return NextResponse.json({});
}
