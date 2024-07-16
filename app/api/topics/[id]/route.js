import mongooseConnection from "@/app/_lib/mongodb";
import Topic from "@/app/_model/topicSchema";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { newTitle: title, newDescription: description } = await request.json();
  const id = params.id;
  mongooseConnection();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Task Updated" }, { status: 202 });
}

export async function GET(request, { params }) {
  const id = params.id;
  mongooseConnection();
  const topic = await Topic.findById(id);
  return NextResponse.json({ topic });
}
