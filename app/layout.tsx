import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tabib",
  description: "Sizning sog'ligingiz bizning maqsadimiz!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#A4D1E4]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
