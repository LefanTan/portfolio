import { Block } from "./Block";
import { HiMail } from "react-icons/hi";
import { AiTwotonePhone, AiOutlineGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import profilePic from "../assets/profilepic.png";
import { isMobile } from "react-device-detect";
import { BasicProp } from "./Interfaces";
import { useSpring, animated } from "react-spring";

export const StartPage = ({ className }: BasicProp) => {

    const slideRightVal = -120
    const bounceProp = useSpring({
        from: { transform: `translateX(0px)` },
        transform: `translateX(5px)`,
        config: { duration: 600, mass: 0.1, tension: 1 },
        delay: 200,
        loop: {
            reverse: true
        }
    });

    const [slideProps, set] = useSpring(() => ({
        background: `linear-gradient(60deg, transparent 50%, black 50%)`,
        right: slideRightVal
    }))

    return (
        // Start Scene
        <div className={`${className}`}>
            <animated.div>

            </animated.div>
            <div className="bg-deep-blue w-screen h-screen flex justify-center items-center">
                <div className="bg-deep-blue w-full h-full lg:w-4/6 p-5 pt-16 pb-16 flex flex-wrap justify-center items-center overflow-hidden">
                    {isMobile && (
                        <Block className="bg-transparent shadow-none flex justify-center items-center">
                            <img
                                src={profilePic}
                                alt="Profile Pic"
                                className="p-8 filter drop-shadow-md"
                            />
                        </Block>
                    )}
                    <Block className="bg-red flex flex-col">
                        <h1 className="small-light-text text-2xl mb-2">
                            Lefan Tan (Jia Hui)
                        </h1>
                        <h2 className="small-light-text font-bold">Front-end Developer</h2>
                        <div className="flex items-center">
                            <HiMail className="text-off-white mr-2" />
                            <p className="small-light-text">lefantan@hotmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <AiTwotonePhone className="text-off-white mr-2" />
                            <p className="small-light-text">780-604-9457</p>
                        </div>
                        <div className="flex items-center mt-3">
                            <button className="w-8 h-8 transition duration-200 text-off-white drop-shadow-sm hover:text-off-white-hover transform active:scale-90 ">
                                <AiOutlineGithub className="w-full h-full" />
                            </button>
                            <button className="ml-3 w-8 h-8 transition duration-200 text-off-white drop-shadow-sm hover:text-off-white-hover transform active:scale-90">
                                <RiLinkedinFill className="w-full h-full" />
                            </button>
                            <button className="text-red text-sm w-fit h-7 ml-auto bg-off-white rounded shadow-md transition duration-200 transform active:scale-90 relative overflow-hidden">
                                <span className="ml-2 mr-2 w-full h-full">Contact Me!</span>
                                <animated.div onMouseLeave={() => set({right: slideRightVal})} onMouseEnter={() => set({right: 0}) } style={slideProps} className="w-56 h-full opacity-25 rounded absolute top-0 right-0"/>
                            </button>
                        </div>
                    </Block>
                    <Block className="bg-dark-green">
                        <div className="relative w-full h-full">
                            <h1 className="small-light-text text-2xl">About Me</h1>
                            <animated.button style={bounceProp} className="transition duration-200 text-off-white absolute bottom-0 -right-2 w-12 h-full lg:h-12 hover:text-off-white-hover">
                                <MdNavigateNext className="w-full h-full" />
                            </animated.button>
                        </div>
                    </Block>
                    {!isMobile && (
                        <Block className="bg-transparent shadow-none flex justify-center items-center">
                            <img
                                src={profilePic}
                                alt="Profile Pic"
                                className="p-8 filter drop-shadow-md"
                            />
                        </Block>
                    )}
                    <Block className="bg-off-white">
                        <div className="relative w-full h-full">
                            <h1 className="small-light-text text-dark-grey text-2xl">
                                Projects I've done
                            </h1>
                            <animated.button style={bounceProp} className="transition duration-200 text-dark-grey absolute bottom-0 -right-2 w-12 h-full lg:h-12 hover:text-dark-grey-hover transform active:scale-90">
                                <MdNavigateNext className="w-full h-full" />
                            </animated.button>
                        </div>
                    </Block>
                </div>
            </div>
        </div>
    );
};
