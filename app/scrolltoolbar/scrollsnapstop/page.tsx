export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] snap-y snap-mandatory">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start snap-y snap-mandatory">
          <h1 className="text-xl snap-start">Scroll Snap Scrolling</h1>
          <h2>scroll-snap-type: y mandatory; scroll-snap-stop: always;</h2>
          <p className="h-[50vh] snap-start bg-green snap-always">Start scrolling...</p>
          <p className="h-[50vh] snap-start bg-yellow snap-always">Just taking up space</p>
          <p className="h-[50vh] snap-start bg-green snap-always">So you can keep</p>
          <p className="h-[50vh] snap-start bg-yellow snap-always">scrolling</p>
          <p className="h-[50vh] snap-start bg-green snap-always">over and over</p>
          <p className="h-[50vh] snap-start bg-yellow snap-always">more...</p>
          <p className="h-[50vh] snap-start bg-green snap-always">over and over</p>
          <p className="h-[50vh] snap-start bg-yellow snap-always">more more...</p>
          <p className="h-[50vh] snap-start bg-green snap-always">over and over</p>
          <p className="h-[50vh] snap-start bg-yellow snap-always">end</p>
        </main>
    </div>
  );
}
