import Link from "next/link";

import { MdEdit } from "react-icons/md";
import RemoveButton from "./RemoveButton";

function TodoCard({ topic }) {
  const { _id: id, title, description } = topic;

  return (
    <div className=" bg-yellow-50 flex justify-between items-start gap-5 p-4 border-gray-500 border-2 border-opacity-50 m-2 rounded-md">
      <div>
        <h1 className="text-xl font-bold font">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex gap-3">
        <Link href={`/editTask/${id}`}>
          <MdEdit />
        </Link>
        <RemoveButton id={id} />
      </div>
    </div>
  );
}

export default TodoCard;
