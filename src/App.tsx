import React, { useRef } from "react";
import { StartPage } from "./components/StartPage";

function App() {
  const mainRef = useRef<HTMLInputElement | null>(null)

  const horizontalScrolling = (e : React.WheelEvent) => {
    e.preventDefault()
    var scrollPosition = mainRef.current?.scrollLeft
    mainRef.current?.scrollTo({
      top: 0,
      left: (scrollPosition ?? 0) + e.deltaY * 10,
      behavior: 'smooth'
    })
  }

  return (
    <main ref={mainRef} onWheel={horizontalScrolling} className="bg-off-white w-screen h-screen p-0 block whitespace-nowrap overflow-auto overflow-y-hidden snap snap-x snap-mandatory">
      <StartPage/>
      {/* About me */}
      <div className="bg-off-white w-screen h-screen inline-block snap snap-start">
        <p>HITE</p>
      </div>
    </main>
  );
}

export default App;
