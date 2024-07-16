"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function EditDataForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to update task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-center shadow-2xl bg-slate-300 p-6 mt-2 rounded-md"
    >
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="bg-yellow-50 border-2 border-gray-500 rounded-full py-2 px-4 w-full mb-2"
      />
      <input
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        type="text"
        placeholder="Description"
        className="bg-yellow-50 border-2 border-gray-500 rounded-full py-2 px-4 w-full mb-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white border-2 border-gray-500 rounded-full py-2 px-4 "
      >
        Update Task
      </button>
    </form>
  );
}

export default EditDataForm;
