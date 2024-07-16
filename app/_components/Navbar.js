import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.jpg";

function Navbar() {
  return (
    <nav className="bg-slate-400 flex justify-between items-center">
      <Link href="/" className="rounded overflow-hidden m-2">
        <Image src={logo} alt="Brand logo" width={60} height={60} />
      </Link>
      <h2 className="text-white text-xl font-bold">TODO LIST</h2>
      <div className=" bg-yellow-300 py-2 px-4 rounded-md mr-2">
        <Link href="/addTask">Add Task</Link>
      </div>
    </nav>
  );
}

export default Navbar;
