import { useHistory } from "react-router-dom"
import { HomeButton } from "../App"
import { FaPrint } from 'react-icons/fa'
import { HiMail } from "react-icons/hi";
import { AiTwotonePhone, AiOutlineGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { MdLocationOn } from 'react-icons/md';
import { CgWebsite } from "react-icons/cg";
import "../index.css"

export const Resume = () => {
    const history = useHistory()

    return (
        <div className="bg-deep-blue w-full h-full flex flex-col justify-center items-center relative py-4">
            <div style={{ width: '21cm' }} className="flex items-center py-2">
                <HomeButton trigger={true} onClick={() => history.push('/')} positionType="static" />
                <button onClick={() => window.print()} className="text-dark-green bg-off-white rounded-md ml-3 px-2 py-1 flex items-center justify-center transition duration-100 hover:bg-off-white-hover transform active:scale-90"><FaPrint className="h-full w-5 mr-2" />Print</button>
            </div>
            <div className="resume">
                {/* First Column */}
                <div className="flex flex-col w-4/6 pr-5">
                    {/* Education */}
                    <div className="row-span-2 col-span-2">
                        <h1 className="h1">Education</h1>
                        <div className="flex">
                            <h2 className="title">University of Alberta</h2>
                            <h2 className="title-extra">CS GPA: 3.5</h2>
                        </div>
                        <div className="flex">
                            <h2 className="description">BSc Computer Science Specializing in Software Practice</h2>
                            <h2 className="description ml-auto">Sept 2018 - April 2022</h2>
                        </div>
                        <ul className="list">
                            <li>CMPUT 301 : Introduction to Software Engineering</li>
                            <li>CMPUT 401 : Software Process and Product Management</li>
                            <li>CMPUT 404 - Web Applications and Architecture</li>
                        </ul>
                    </div>

                    {/* Work */}
                    <div className="row-span-5 col-span-2 mt-5">
                        <h1 className="h1">Work</h1>
                        <h2 className="title">Vizworx Inc</h2>
                        <div className="flex">
                            <h2 className="description">Software Developer</h2>
                            <h2 className="description ml-auto">May 2020 - May 2021</h2>
                        </div>
                        <ul className="list">
                            <li>Part of the development team working on a R&D project aimed at identifying and deterring IUU (Illegal, unreported and
                                unregulated) fishing around the world. Sponsored by Canada’s Digital Supercluster, in collaboration with McDonald, Dettwiler & Associates
                                and Simon Fraser University, our role is to provide advanced XR visualizations through the fusion of
                                data supplied by MDA. Our goal is to allow analytics to access and view data in an interactive and innovative way through the use of 3D space</li>
                            <li>Responsible for developing and designing XR applications that are deployed to the Ocolus Devices, HP Reverb G2, and any other OpenXR compatible devices</li>
                            <li>Responsible for designing an interactive and highly functional UI/UX for our VR application</li>
                        </ul>

                        <h2 className="title mt-1">University of Alberta's Students' Union</h2>
                        <div className="flex">
                            <h2 className="description">Safewalk Coordinator</h2>
                            <h2 className="description ml-auto">May 2019 - April 2020</h2>
                        </div>
                        <ul className="list">
                            <li>Oversee all operations of Safewalk, a volunteer program with 100+ volunteers that operates to ensure campus safety by providing safe passage home</li>
                            <li>Ensure effective operation of the Safewalk program including managing all volunteers, running interviews, training, evaluating and supervising</li>
                            <li>Problem solving, collaboration and leadership skills is crucial in this position</li>
                        </ul>
                    </div>

                    {/* Projects */}
                    <div className="row-span-5 col-span-2 mt-auto mb-20">
                        <h1 className="h1">Project</h1>
                        <div className="flex">
                            <h2 className="title">Big 2</h2>
                            <h2 className="title-extra">Personal Project</h2>
                        </div>
                        <ul className="list">
                            <li>Allows friends from all over the world to play the popular card game, Big2 online</li>
                            <li>A basic lobby system where players can join a room based on a randomly generated code</li>
                            <li>Made with React and Firebase's Realtime Database</li>
                        </ul>

                        <div className="flex mt-1">
                            <h2 className="title">Basictheory.io</h2>
                            <h2 className="title-extra">Personal Project</h2>
                        </div>
                        <ul className="list">
                            <li>Interactive, online wiki that shows users different ways of playing guitar chords of different voicing.</li>
                            <li>Chords generated are clickable, playing the exact note you clicked</li>
                            <li>Scales page shows users how to play every type of scales on the guitar in the CAGED system</li>
                        </ul>

                        <div className="flex mt-1">
                            <h2 className="title">FeelsLog</h2>
                            <h2 className="title-extra">Academic Project</h2>
                        </div>
                        <ul className="list">
                            <li>A full stack android app made to track your daily emotions in a diary format.</li>
                            <li>Users are able to create an entry that tracks location, mood, a photo, descriptions etc</li>
                            <li>Has a social feature that allows users to follow each other and be able to view each other's mood entries</li>
                        </ul>
                    </div>
                </div>

                {/* Second Column */}
                <div className="flex flex-col h-full w-2/6">
                    {/* Profile */}
                    <div className="row-span-3 relative h-fit mb-5">
                        <div className="bg-dark-green p-4 pb-10">
                            <h1 className="small-light-text font-extralight text-5xl">Lefan Tan</h1>
                            <p className="font-main text-dark-green bg-off-white rounded-lg leading-none text-lg font-sm pl-2 py-1.5 mt-2">Software Developer, Designer</p>
                            <div className="flex items-center mt-2">
                                <HiMail className="text-off-white mr-2" />
                                <p className="small-light-text"><a href="mailto:lefantan@hotmail.com">lefantan@hotmail.com</a></p>
                            </div>
                            <div className="flex items-center mt-2">
                                <AiTwotonePhone className="text-off-white mr-2" />
                                <p className="small-light-text">780-604-9457</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <CgWebsite className="text-off-white mr-2" />
                                <p className="small-light-text"><a href="http://lefantan.com/" target="_blank" rel="noopener noreferrer">lefantan.com</a></p>
                            </div>
                            <div className="flex items-center mt-2">
                                <AiOutlineGithub className="text-off-white mr-2" />
                                <p className="small-light-text"><a href="https://github.com/LefanTan" target="_blank" rel="noopener noreferrer">github.com/LefanTan</a></p>
                            </div>
                            <div className="flex items-center mt-2">
                                <RiLinkedinFill className="text-off-white mr-2" />
                                <p className="small-light-text"><a href="https://www.linkedin.com/in/lefantan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/lefantan/</a></p>
                            </div>
                            <div className="flex items-center mt-2">
                                <MdLocationOn className="text-off-white mr-2" />
                                <p className="small-light-text">Edmonton, Alberta, Canada</p>
                            </div>
                        </div>
                    </div>

                    {/* Objective */}
                    <div className="row-span-1 p-1 h-fit mb-5">
                        <h1 className="h1">Objective</h1>
                        <p className="font-main text-dark-green text-md">A Dedicated, passionate programmer with a strong eager to learn. While I take an interest in designing front-end UI, I'm happy to take on task of all sorts.
                            I'm looking for a position that will provide me with an opportunity
                            for me to grow professionally and personally.</p>
                    </div>

                    {/* Languages */}
                    <div className="row-span-3 h-fit mb-5">
                        <h1 className="h1">Languages</h1>
                        <div className="flex flex-wrap">
                            <h1 className="languages">Javascript</h1>
                            <h1 className="languages">Typescript</h1>
                            <h1 className="languages">Html</h1>
                            <h1 className="languages">Css</h1>
                            <h1 className="languages">C#</h1>
                            <h1 className="languages">C++</h1>
                            <h1 className="languages">Python</h1>
                        </div>
                    </div>

                    {/* Framwork & Tools */}
                    <div className="row-span-3 h-fit mb-5">
                        <h1 className="h1">Framwork & Tools</h1>
                        <div className="flex flex-wrap">
                            <h1 className="languages">React</h1>
                            <h1 className="languages">React Native</h1>
                            <h1 className="languages">Unity</h1>
                            <h1 className="languages">Firebase</h1>
                            <h1 className="languages">Tailwind</h1>
                            <h1 className="languages">Git</h1>
                            <h1 className="languages">Figma</h1>
                            <h1 className="languages">Illustrator</h1>
                            <h1 className="languages">OpenVR</h1>
                            <h1 className="languages">Android Studio</h1>
                        </div>
                    </div>

                    <div className="row-span-1 mt-auto w-full flex items-center">
                        <h1 className="font-main font-semibold w-full text-off-white text-md bg-dark-green px-3 py-2">Last Updated: 12 August 2021</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}