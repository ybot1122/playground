import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

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
      <body className={`${font.className} bg-slate-700 text-teal-100`}>{children}</body>
    </html>
  );
}
