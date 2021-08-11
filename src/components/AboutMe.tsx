import { motion } from "framer-motion";
import { useCallback, useState, memo } from "react";
import { isMobile } from "react-device-detect";
import { useScrollListener } from "./Hooks";
import { BasicProp } from "./Interfaces";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import { HomeButton } from "../App";

export const AboutMe = memo(({ className }: BasicProp) => {

    const [mainDom, setMainNode] = useState<HTMLInputElement | null>(null)
    const [transition, setTransState] = useState(false)

    const refHandler = useCallback((node: HTMLInputElement) => {
        if (node !== null) {
            setMainNode(node)
        }
    }, [])

    useScrollListener(mainDom, (isIn) => setTransState(isIn))

    const parentVariant = {
        visible: {
            clipPath: transition ? 'inset(0% 0 0% 0)' : 'inset(50% 0 50% 0)',
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    }

    const childrenVariant = {
        visible: {
            clipPath: transition ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div id="aboutme" ref={refHandler} className={`${className} bg-transparent`}>
            <div className="bg-deep-blue w-screen h-screen flex justify-center items-center overflow-hidden relative">
                <HomeButton trigger={transition}/>
                <motion.div
                    animate={{ x: transition ? '-7.5%' : '-15%' }} transition={{ type: "spring", duration: 2, delay: 1 }}
                    style={{ background: `linear-gradient(${isMobile ? '30deg' : '60deg'}, ${getComputedStyle(document.body).getPropertyValue('--deep-blue-shade')} 50%, transparent 50%)` }}
                    className="absolute top-0 bottom-0 -left-1/2 -right-full lg:-right-1/2 drop-shadow-lg z-20" />
                <div className="w-full h-fit lg:h-full flex justify-center items-center z-30">
                    <motion.div className="w-full lg:w-fit h-full flex flex-col lg:flex-row justify-center items-center"
                        animate="visible"
                        variants={parentVariant}>
                        <div className="bg-transparent flex flex-row lg:flex-col items-center h-fit lg:h-4/5 w-fit m-3 lg:m-0 lg:mr-3 shadow-hard">
                            <img src={pic1} alt="profile pic" className="w-1/3 lg:w-auto lg:h-1/3" />
                            <img src={pic2} alt="profile pic" className="w-1/3 lg:w-auto lg:h-1/3" />
                            <img src={pic3} alt="profile pic" className="w-1/3 lg:w-auto lg:h-1/3" />
                        </div>
                        <div className="bg-off-white w-11/12 lg:w-8/12 h-4/5 mb-5 lg:mb-0 flex flex-col shadow-hard p-5">
                            <motion.h1 variants={childrenVariant} className="text-dark-grey-active font-main font-light text-4xl mb-4">About me</motion.h1>
                            <motion.p variants={childrenVariant} className="about-me">
                                <b>Hey there, my name is Lefan</b> and I'm currently a Computer Science - Software Practice student at the University of Alberta with 1 year of internship experience working at Vizworx Inc.
                            </motion.p>
                            <br />
                            <motion.p variants={childrenVariant} className="about-me">
                                I first started learning about programming through Unity, as a kid that loves video games,
                                Unity was a perfect gateway for me to learn about programming. Fast forward to now, I took an interest in web development (especially the Front-end side of things!)
                            </motion.p>
                            <br />
                            <motion.p variants={childrenVariant} className="about-me">
                                I take pride in my ability to be a team player, communicate well, hardworking, open to feedback and most importantly, always learning.
                            </motion.p>
                            <br />
                            <motion.p variants={childrenVariant} className="font-semibold text-dark-grey-active">Hobbies and Skills:</motion.p>
                            <motion.p variants={childrenVariant} className="about-me">
                                React (JS & TS, Tailwind CSS, Framer-Motion), Android Studio (C#), Unity (C#, OpenVR). Currently spending my time learning more about UI/UX. <br />
                                For my hobbies, I enjoy playing the guitar, boxing, badminton, film photography and some light gaming
                            </motion.p>
                            <br />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
})