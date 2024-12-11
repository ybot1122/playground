import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const font = Merriweather({ weight: ["400", "300", "700", "900"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "NextJS App Router Tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-700 text-teal-100`}>
      <nav className="flex fixed top-0 left-0 w-[100vw] *:">
        <ul>
          <Link href="/">Home</Link>
        </ul>
      </nav>
{children}</body>
    </html>
  );
}
