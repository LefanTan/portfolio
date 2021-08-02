import React, { useRef } from "react";
import { useEffect } from "react";
import { AboutMe } from "./components/AboutMe";
import { StartPage } from "./components/StartPage";

function App() {
  const mainRef = useRef<HTMLInputElement | null>(null)

  const horizontalScrolling = (e: React.WheelEvent) => {
    var scrollPosition = mainRef.current?.scrollLeft
    mainRef.current?.scrollTo({
      top: 0,
      left: (scrollPosition ?? 0) + e.deltaY * 5,
      behavior: 'smooth'
    })
  }

  return (
    <main ref={mainRef} onWheel={horizontalScrolling} className="bg-transparent w-screen h-screen p-0 whitespace-nowrap flex overflow-x-scroll overflow-y-hidden snap snap-x snap-mandatory">
      <StartPage className="inline-block snap snap-center"/>
      {/* About me */}
      <AboutMe className="inline-block snap snap-center"/>
    </main>
  );
}

export default App;
