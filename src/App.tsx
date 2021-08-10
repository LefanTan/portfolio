import React, { useRef } from "react";
import { AboutMe } from "./components/AboutMe";
import { ProjectPage } from "./components/ProjectPage";
import { StartPage } from "./components/StartPage";
import { ContactMe } from "./components/ContactMe";
import { AiFillHome } from "react-icons/ai";
import { directToPage } from "./components/helpers";
import { motion } from "framer-motion";
import { Props } from "framer-motion/types/types";

export const HomeButton = (props : Props) => {
  return (
    <motion.button
      animate={{ opacity: props['trigger'] ? 1 : 0 }}
      transition={{duration: 1}}
      onClick={() => directToPage('startpage')} className="absolute text-off-white w-8 h-8 bottom-10 right-5 z-40 hover:text-off-white-hover transform active:scale-90">
      <AiFillHome className="w-full h-full" />
    </motion.button>
  )
}

function App() {
  const mainRef = useRef<HTMLInputElement | null>(null)

  var prevDeltaX = 0
  const horizontalScrolling = (e: React.WheelEvent) => {
    var scrollPosition = mainRef.current?.scrollLeft;
    // e.deltaX being -0 means it is a scroll wheel (though track pad can have -0 once in while)
    (e.deltaX === 0 && prevDeltaX === 0) && mainRef.current?.scrollTo({
      top: 0,
      left: (scrollPosition ?? 0) + e.deltaY * 7.5,
      behavior: 'smooth'
    })

    prevDeltaX = e.deltaX
  }

  return (
    <main ref={mainRef} onWheel={horizontalScrolling} className="bg-transparent w-screen h-screen p-0 whitespace-nowrap flex overflow-x-scroll overflow-y-hidden snap snap-x snap-mandatory">
      <StartPage className="inline-block snap snap-center" />
      <AboutMe className="inline-block snap snap-center" />
      <ProjectPage className="inline-block snap snap-start" />
      <ContactMe className="inline-block snap snap-start" />
    </main>
  );
}

export default App;
