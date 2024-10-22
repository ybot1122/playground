import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-xl">Normal Scrolling</h1>
          <h2>This will cause bottom toolbar to minimize/hide</h2>
          <p className="h-[100vh]">Start scrolling...</p>
          <p className="h-[100vh]">Just taking up space</p>
          <p className="h-[100vh]">So you can keep</p>
          <p className="h-[100vh]">scrolling</p>
          <p className="h-[100vh]">over and over</p>
          <p className="h-[100vh]">end</p>
        </main>
    </div>
  );
}
