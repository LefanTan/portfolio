import React, { useRef } from "react";
import { AboutMe } from "./components/AboutMe";
import { ProjectPage } from "./components/ProjectPage";
import { isMobile } from "react-device-detect";
import { StartPage } from "./components/StartPage";

function App() {
  const mainRef = useRef<HTMLInputElement | null>(null)

  var prevDeltaX = 0
  const horizontalScrolling = (e: React.WheelEvent) => {
    var scrollPosition = mainRef.current?.scrollLeft;
    // e.deltaX being -0 means it is a scroll wheel (though track pad can have -0 once in while)
    (e.deltaX === 0 && prevDeltaX === 0) && mainRef.current?.scrollTo({
      top: 0,
      left: (scrollPosition ?? 0) + e.deltaY * 5,
      behavior: 'smooth'
    })

    prevDeltaX = e.deltaX
  }

  return (
    <main ref={mainRef} onWheel={horizontalScrolling} className="bg-transparent w-screen h-screen p-0 whitespace-nowrap flex overflow-x-scroll overflow-y-hidden snap snap-x snap-mandatory">
      <StartPage className="inline-block snap snap-center" />
      <AboutMe className="inline-block snap snap-center" />
      {!isMobile && 
        <ProjectPage className="inline-block snap snap-start" />
      }
      {isMobile && 
        <ProjectPage className="inline-block snap snap-start" />
      }
    </main>
  );
}

export default App;
