import { Single_Day } from "next/font/google";
import "./globals.css";

const inter = Single_Day({ subsets: ["latin"], weight:"400" });

export const metadata = {
  title: "Rick and Morty World",
  description: "Rick and Morty Character Info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
