import mongooseConnection from "@/app/_lib/mongodb";
import Topic from "@/app/_model/topicSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  mongooseConnection();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET() {
  mongooseConnection();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  mongooseConnection();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task Deleted" }, { status: 203 });
}
