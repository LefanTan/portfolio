import { motion } from "framer-motion";
import { memo, useCallback, useState } from "react";
import { isMobile } from "react-device-detect";
import { useScrollListener } from "./Hooks";
import { BasicProp } from "./Interfaces";
import { Projects } from "./Projects";
import { HomeButton } from "../App";

export const projectPageTypes = ["experience", "work", "work ii", "work iii"];
export const ProjectPage = memo(({ className }: BasicProp) => {
  const [mainDom, setMainNode] = useState<HTMLInputElement | null>(null);
  const [currentPage, setCurrentPg] = useState(projectPageTypes[0]);
  const [transition, setTransState] = useState(true);

  const refHandler = useCallback((node: HTMLInputElement) => {
    if (node !== null) {
      setMainNode(node);
    }
  }, []);

  useScrollListener(mainDom, (isIn) => setTransState(isIn));

  return (
    <div id="myprojects" ref={refHandler} className={`${className}`}>
      <motion.div className="bg-off-white w-full h-fit px-3 py-2 flex items-center z-50">
        <h1 className="font-main font-semibold text-dark-grey text-lg lg:text-2xl mr-2">
          My Projects
        </h1>
        {projectPageTypes.map((type: string, index: number) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPg(type);
            }}
            className={`font-main text-sm
                    ${
                      currentPage === type
                        ? `text-off-white bg-dark-grey`
                        : "text-dark-grey bg-transparent"
                    } duration-100 rounded-md px-1 m-0 lg:m-0.5 transform hover:scale-110`}
          >
            {type}
          </button>
        ))}
      </motion.div>
      <div className="bg-deep-blue w-screen h-pgpage lg:h-screen flex justify-center items-center overflow-x-hidden overflow-y-auto lg:overflow-y-hidden relative z-10">
        {!isMobile && (
          <motion.div
            animate={{ x: transition ? "100%" : "10%" }}
            transition={{ type: "spring", duration: 2, delay: 1 }}
            style={{
              background: `linear-gradient(-160deg, ${getComputedStyle(
                document.body
              ).getPropertyValue("--deep-blue-shade")} 50%, transparent 50%)`,
            }}
            className="absolute top-0 bottom-0 -left-1/2 -right-full lg:-right-1/2 drop-shadow-lg z-0"
          />
        )}
        <HomeButton trigger={transition} position="lg:bottom-18 right-5" />
        <div className="w-full h-full relative flex justify-center items-center z-10 overflow-x-hidden">
          {/* EXPERIENCE PAGE 1 */}
          {currentPage === projectPageTypes[0] && (
            <div className="projects-container">
              <Projects
                slideFrom="left"
                transition={transition}
                imgFileName="vizworx.mp4"
                title="Vizworx Inc"
                year="2019"
                languages={["unity", "c#", "openvr"]}
                website="https://vizworx.com/"
                description="Part of the development team working on a R&D project aimed at identifying and deterring IUU (Illegal, unreported and unregulated) fishing around the world. Responsible for designing an interactive and highly functional UI/UX for our VR application"
              />
            </div>
          )}
          {/* WORK PAGE 1 */}
          {currentPage === projectPageTypes[1] && (
            <div className="projects-container">
              <Projects
                slideFrom="left"
                transition={transition}
                imgFileName="big2.mp4"
                title="Big 2"
                year="2021"
                languages={["react", "js", "firebase"]}
                github="https://github.com/LefanTan/big2"
                website="https://lefantan.github.io/big2/"
                description="An online website based on the card game - Big 2. It has a lobby system, allowing you to play Big 2 with your friends from anywhere in the world."
              />
              {/* {menu} */}
              <Projects
                slideFrom="right"
                transition={transition}
                imgFileName="basictheory.mp4"
                title="Basictheory.io"
                year="2020"
                languages={["react", "js", "firebase"]}
                github="https://github.com/LefanTan/basictheory"
                website="https://lefantan.github.io/basictheory/"
                description="An interactive online wiki that shows you different ways of playing chords of all types / voicing. 
                        It also contains information on how to play almost every scales of different shapes (CAGED system)."
              />
            </div>
          )}
          {/* WORK PAGE 2 */}
          {currentPage === projectPageTypes[2] && (
            <div className="projects-container">
              <Projects
                slideFrom="left"
                transition={transition}
                imgFileName="wobblyisland.mp4"
                title="Wobbly Island"
                year="2020"
                languages={["unity3d", "c#"]}
                github="https://github.com/LefanTan/FloatingIsland"
                website="https://github.com/LefanTan/FloatingIsland/releases/tag/1.0"
                description="This is a hackathon unity project made by my friends and I.
                        We implemented basic procedural land generation using perlin noise and masked it with a circle gradient to get individual islands"
              />
              {/* {menu} */}
              <Projects
                slideFrom="right"
                transition={transition}
                imgFileName="feelslog.mp4"
                title="FeelsLog"
                year="2020"
                languages={["c#", "firestore", "android api"]}
                github="https://github.com/LefanTan/FeelsLog"
                taller
                description="An android app made to track your daily emotions in a diary format. You can upload a journal that 
                        includes your location, mood, description, photo etc, so you can better understand your own emotions"
              />
            </div>
          )}
          {currentPage === projectPageTypes[3] && (
            <div className="projects-container">
              <Projects
                slideFrom="left"
                transition={transition}
                imgFileName="it-tracker.mp4"
                title="Internet Tracker"
                year="2019"
                languages={["js", "html", "css", "chrome api"]}
                github="https://github.com/LefanTan/Internet-Tracker"
                taller
                description="A hackathon project that got first trying out html, css and javascript. It is a chrome extension that tracks internet usage (time, websites visited)"
              />
              {/* {menu} */}
              <Projects
                slideFrom="right"
                transition={transition}
                imgFileName="zombiegame.mp4"
                title="Zombiegame"
                year="2017"
                languages={["c++"]}
                github="https://github.com/LefanTan/Zombie-Game"
                description="A ascii graphic zombie game written in c++, featuring collision detection mode, ability to attack, and A* pathfinding algorithm for zombies to path towards the player"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
