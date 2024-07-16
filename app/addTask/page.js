"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-10">
      <h1 className="text-2xl font-semibold">Create Task </h1>
      <form
        onSubmit={handleSubmit}
        className="text-center shadow-2xl bg-slate-300 p-6 mt-2 rounded-md"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="bg-yellow-50 border-2 border-gray-500 rounded-full py-2 px-4 w-full mb-2"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="bg-yellow-50 border-2 border-gray-500 rounded-full py-2 px-4 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white border-2 border-gray-500 rounded-full py-2 px-4 "
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Page;
