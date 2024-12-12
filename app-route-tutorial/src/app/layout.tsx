import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const font = Merriweather({
  weight: ["400", "300", "700", "900"],
  subsets: ["latin"],
});

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
      <body
        className={`${font.className} bg-slate-700 text-teal-100 pt-[200px]`}
      >
        <nav className="flex fixed top-0 left-0 w-[100vw] p-10 bg-blue-900">
          <ul className="*:p-5 *:border-2 *:border-blue-500 *:mx-5">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
