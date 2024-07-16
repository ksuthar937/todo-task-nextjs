import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ToDo Task",
  description: "User defined todo task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
