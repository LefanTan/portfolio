import { motion } from "framer-motion";
import { memo } from "react";
import { getFile } from "./helpers";
import { BasicProp } from "./Interfaces";

interface ProjectProp extends BasicProp {
  transition: boolean;
  imgFileName: string;
  slideFrom: string;
  title: string;
  year: string;
  description: string;
  languages: string[];
  github?: string;
  website?: string;
  taller?: boolean;
}

export const Projects = memo((props: ProjectProp) => {
  const parentVariant = {
    hidden: {
      x: props.slideFrom === "right" ? 1000 : -1000,
    },
    visible: {
      x: props.transition ? 0 : props.slideFrom === "right" ? 1000 : -1000,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const opacityChildrenVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: props.transition ? 1 : 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const pathChildrenVariant = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: props.transition ? 1 : 0,
      transition: {
        duration: 2,
        type: "tween",
      },
    },
  };

  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="visible"
      className={`${props.className} flex flex-col items-center justify-center w-full lg:w-1/3 h-full m-5`}
    >
      <div
        className={`w-fit ${
          props.taller ? "lg:h-1/2 h-96" : "h-fit"
        } mb-5 mt-5 flex justify-center items-center p-2 relative bg-antique-white`}
      >
        <video
          playsInline
          muted
          autoPlay
          loop
          src={getFile(props.imgFileName, "video")}
          className="z-10 h-full"
        />
      </div>
      <div className="flex flex-col w-full h-fit">
        <div className="w-full flex flex-wrap justify-start items-end whitespace-pre">
          <h1 className="font-main text-off-white text-4xl font-semibold">
            {props.title}
          </h1>
          &nbsp;&nbsp;&nbsp;
          <p className="font-main text-off-white text-4xl font-thin">
            {props.year}
          </p>
        </div>
        <motion.p
          variants={opacityChildrenVariant}
          className="whitespace-pre-line font-main text-off-white text-xs font-light mt-3"
        >
          {props.description}
        </motion.p>
        <div className="w-full flex justify-start items-center whitespace-pre mt-1">
          <motion.p
            variants={opacityChildrenVariant}
            className="font-main italic text-antique-white mt-1 whitespace-pre"
          >
            {props.languages.join("    ")}
          </motion.p>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 ml-auto transition duration-100 transform hover:scale-110 active:scale-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <motion.path
                variants={pathChildrenVariant}
                className="stroke-antique-white stroke-1 fill-transparent "
                d="M9.6533203,20.8652344c-0.0001831-0.1481934-0.065979-0.2887573-0.1796875-0.3837891c-0.114624-0.093689-0.2642212-0.1332397-0.4101562-0.1083984c-1.5908203,0.2949219-3.6083984,0.2988281-4.1943359-1.3466797c-0.3604126-0.8795166-0.9379883-1.6533203-1.6787109-2.2490234c-0.1533203-0.0786133-0.2915039-0.1837158-0.4082031-0.3104858c-0.0394287-0.2409058-0.2471313-0.4180298-0.4912109-0.4190063H2.2890015c-0.2753296,0-0.4989014,0.2226562-0.5,0.4980469c-0.0029297,0.5703125,0.7109375,0.9970703,0.921875,1.109375c0.5300293,0.4760742,0.9473267,1.06427,1.2217407,1.7217407C4.28125,20.3565063,5.34375,21.8721313,8.6552734,21.4492798c0.0029297,0.3642578,0.0078125,0.5527344,0.0117188,0.6962891l0.0048828,0.2949219c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5l-0.0048828-0.3223267C9.6611328,21.9169922,9.6533203,21.6270142,9.6533203,20.8652344z M20.9208984,5.2236328c-0.0302734-0.0380859-0.0625-0.078125-0.0957031-0.1181641c0.0671387-0.2113647,0.1199341-0.427002,0.1582031-0.6454468c0.1547852-1.0731812,0.0175171-2.1682739-0.3974609-3.1700439C20.53125,1.1523438,20.4181519,1.0460815,20.2773438,1c-0.1416016-0.046875-1.4335938-0.3945312-4.1298828,1.3818359c-2.2589722-0.5742188-4.6257324-0.5742188-6.8847656,0C6.5673828,0.6259766,5.2832031,0.9550781,5.140625,0.9970703C4.9971313,1.0423584,4.8814087,1.1494751,4.8251953,1.2890625c-0.4225464,1.0169067-0.55896,2.1299438-0.3945312,3.21875c0.038269,0.199646,0.086853,0.3971558,0.1455078,0.5917969C4.5410156,5.1426392,4.5078125,5.1855469,4.4765625,5.2275391C3.6300049,6.3015747,3.1795654,7.6346436,3.2011719,9.0020142C3.1987305,9.3121338,3.2130737,9.6221313,3.2441406,9.9307251c0.3398438,4.6640625,3.3486328,5.9619141,5.9473267,6.4052734c-0.1692505,0.3034058-0.2957764,0.6287231-0.3760376,0.9667969c-0.0657959,0.2680054,0.0981445,0.5386963,0.3662109,0.6044922s0.5386963-0.0981445,0.6044922-0.3662109c0.0925293-0.4596558,0.3247681-0.8795166,0.664978-1.2021484c0.2080688-0.1820068,0.229248-0.49823,0.0472412-0.7062988c-0.0820312-0.093689-0.1959839-0.1535034-0.3197021-0.1677246c-2.7567749-0.3125-5.618103-1.2236328-5.9384766-5.625C4.2119141,9.5615234,4.1989136,9.2817993,4.2011719,9.0020142C4.182312,7.854248,4.5603638,6.7351685,5.2714844,5.8339844c0.0751953-0.1015625,0.1591797-0.1943359,0.2421875-0.2861328c0.12677-0.1398926,0.1641846-0.3392334,0.0966797-0.515625C5.5250244,4.8067017,5.4599609,4.5740356,5.4160156,4.3369141c-0.119751-0.803894-0.039917-1.6248779,0.2324219-2.390625c1.187561,0.1653442,2.309082,0.645874,3.2479858,1.3916016c0.1212158,0.0817871,0.2723389,0.1060791,0.4130859,0.0664062c2.2244263-0.6035156,4.569519-0.6035156,6.7939453,0c0.1415405,0.0395508,0.2932739,0.0148926,0.414978-0.0673828c0.932312-0.753418,2.0534058-1.2368164,3.241272-1.3974609c0.269165,0.7542114,0.3505859,1.5626831,0.2373047,2.3554688c-0.0441895,0.2519531-0.1132202,0.4989624-0.2060547,0.7373047c-0.0675049,0.1763916-0.0301514,0.3756714,0.0966797,0.515625c0.0878906,0.0966797,0.1757812,0.2050781,0.2528687,0.3017578c0.7128296,0.8942261,1.0913696,2.0090332,1.0704346,3.1524048c0.0023193,0.2860107-0.0117188,0.5719604-0.0419922,0.8564453c-0.3173828,4.3808594-3.1894531,5.2919922-5.9570312,5.6064453c-0.2745972,0.0314941-0.4716797,0.2797241-0.4401245,0.5543823c0.0142212,0.1236572,0.0739746,0.2376099,0.1676636,0.3195801c0.3447266,0.3249512,0.5755615,0.7523193,0.6582642,1.21875c0.0852051,0.3293457,0.124939,0.6687622,0.118103,1.0087891v2.4590454c-0.0106812,0.6757812-0.0106812,1.1826172-0.0106812,1.414978c0.0003662,0.276123,0.2245483,0.4996948,0.5006714,0.4993286c0.2755737-0.0004272,0.4989014-0.2237549,0.4993286-0.4993286c0-0.2304688,0-0.7314453,0.0106812-1.4072266v-2.4667969c0.0078735-0.4234619-0.0424194-0.8460083-0.149353-1.2558594c-0.0752563-0.3407593-0.1988525-0.6689453-0.3671875-0.9746094c2.6083984-0.4423828,5.6288452-1.7392578,5.9658203-6.3847656c0.0330811-0.3153076,0.0484009-0.6322021,0.0458984-0.9492188C22.2337646,7.6307373,21.7775269,6.2945557,20.9208984,5.2236328z"
              />
            </svg>
          </a>
          {props.website && (
            <a
              href={props.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 ml-1 transition duration-100 transform hover:scale-110 active:scale-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 420 420"
                className="fill-transparent"
              >
                <motion.path
                  variants={pathChildrenVariant}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-antique-white stroke-3 fill-transparent"
                  d="M378.74,159V376.89c-.72,25.9-16,25.47-16,25.47H90.35c-11.89,0-23.81.45-35.69.23-8.3-.16-17.11-2-23-7.81-6.12-6-4.73-13.94-4.64-21.7l.19-15.87.53-44.62.67-55.6.7-59.15.66-55.26.52-43.93.3-25.15,0-3.23s1.89-16,15.09-17.92H239.11m7.63,117L376.43,39.66l5.31-5.31s6-5-18-6l-48-3m73,78,.46-55c-3.46-20.95-7.46-13.95-7.46-13.95"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});
