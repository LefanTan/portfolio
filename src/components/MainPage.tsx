import { AboutMe } from "./AboutMe";
import { ProjectPage } from "./ProjectPage";
import { StartPage } from "./StartPage";
import { ContactMe } from "./ContactMe";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useRef } from "react";
import { isMobile } from "react-device-detect";
import { directToPage } from "./helpers";
import { memo } from "react";

export const MainPage = memo(() => {
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

    var currentIndex = 0
    const navigate = (n: number) => {
        const pages = ['startpage', 'aboutme', 'myprojects', 'contactme']
        var nextIndex = (currentIndex + n) % pages.length
        if(nextIndex === -1) nextIndex = pages.length - 1
        
        currentIndex = nextIndex
        directToPage(pages[nextIndex])
    }

    return (
        <main ref={mainRef} onWheel={horizontalScrolling} className="bg-transparent w-screen h-screen p-0 whitespace-nowrap flex overflow-x-scroll overflow-y-hidden snap snap-x snap-mandatory">

            {!isMobile && <div className="pointer-events-none fixed w-screen h-screen flex items-center justify-between z-40 p-3">
                <button onClick={() => navigate(-1)} className="navigate-button"><BsArrowLeftShort className="w-full h-full" /></button>
                <button onClick={() => navigate(1)} className="navigate-button"><BsArrowRightShort className="w-full h-full" /></button>
            </div>}

            <StartPage className="inline-block snap snap-center" />
            <AboutMe className="inline-block snap snap-center" />
            <ProjectPage className="inline-block snap snap-start" />
            <ContactMe className="inline-block snap snap-start" />
        </main>
    )
})