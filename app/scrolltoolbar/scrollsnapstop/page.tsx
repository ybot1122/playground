"use client"
import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";
import RiveCar from "@/components/RiveCar/RiveCar";

export default function Home() {
  return (
    <div className="w-[100vw] snap-y snap-mandatory">
      <div className="fixed top-0 left-0 w-full bg-yellow">I am fixed</div>
      <main className="flex flex-col items-center sm:items-start snap-y snap-mandatory *:p-10">
        <div className="h-[100vh] snap-start bg-yellow">
            <h1 className="text-xl">Scroll Snap Scrolling</h1>
            <h2>scroll-snap-type: y mandatory; scroll-snap-stop: always;</h2>
        </div>
        <FullScreenSection label="Start scrolling..." />
        <FullScreenSection label="Start scrolling..." />
        <FullScreenSection label="Start scrolling..." />
        <FullScreenSection label="Start scrolling..." />
        <FullScreenSection label="Start scrolling..." />
        <FullScreenSection label="Start scrolling..." />
        <FullScreenSection label="Start scrolling..." />
        <FullScreenSection label="Start scrolling..." />
        <FullScreenSection label="Start scrolling..." />
          <div className="h-[100vh] snap-start bg-green snap-always w-full">Car<RiveCar /></div>
          <p className="h-[100vh] snap-start bg-yellow snap-always">end</p>
        </main>
    </div>
  );
}
