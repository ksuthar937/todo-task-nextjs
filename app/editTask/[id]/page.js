import EditDataForm from "@/app/_components/EditDataForm";
import React from "react";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch task!");
    }
    const data = await res.json();

    return data.topic;
  } catch (error) {
    console.log(error);
  }
};

async function Page({ params }) {
  const { id } = params;

  const { title, description } = await getTopicById(id);

  return (
    <div className="m-10">
      <h1 className="text-2xl font-semibold">Edit Task </h1>
      <EditDataForm id={id} title={title} description={description} />
    </div>
  );
}

export default Page;
