"use client"

import { useInView } from "react-intersection-observer";

export default function FullScreenSection({label}:{label: string}) {
  const {inView, ref} = useInView()

  return (
<div ref={ref} className="h-[100vh] snap-start odd:bg-green even:bg-yellow snap-always">{label} : {inView? 'inView' : 'not'}</div>  );
}