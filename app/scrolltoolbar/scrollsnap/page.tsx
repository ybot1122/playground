import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] snap-y snap-mandatory">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start snap-y snap-mandatory">
          <h1 className="text-xl snap-start">Scroll Snap Scrolling</h1>
          <h2>scroll-snap-type: y mandatory; default scroll snap stop</h2>
          <p className="h-[50vh] snap-start bg-blue">Start scrolling...</p>
          <p className="h-[50vh] snap-start bg-yellow">Just taking up space</p>
          <p className="h-[50vh] snap-start bg-blue">So you can keep</p>
          <p className="h-[50vh] snap-start bg-yellow">scrolling</p>
          <p className="h-[50vh] snap-start bg-blue">over and over</p>
          <p className="h-[50vh] snap-start bg-yellow">more...</p>
          <p className="h-[50vh] snap-start bg-blue">So you can keep</p>
          <p className="h-[50vh] snap-start bg-yellow">scrolling</p>
          <p className="h-[50vh] snap-start bg-blue">over and over</p>
          <p className="h-[50vh] snap-start bg-yellow">more...</p>
        </main>
    </div>
  );
}
