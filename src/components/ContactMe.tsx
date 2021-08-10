import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { RiSendPlaneFill } from 'react-icons/ri';
import { BasicProp } from "./Interfaces";
import emailjs from 'emailjs-com';
import Popup from "./Popup";
import { motion } from "framer-motion";
import { useScrollListener } from "./Hooks";
import { HomeButton } from "../App";

export const ContactMe = ({ className }: BasicProp) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [error, setErrorMsg] = useState('')
    const [popup, setPopup] = useState(false)

    const [mainDom, setMainNode] = useState<HTMLInputElement | null>(null)
    const [transition, setTransState] = useState(false)

    const refHandler = useCallback((node: HTMLInputElement) => {
        if (node !== null) {
            setMainNode(node)
        }
    }, [])

    useScrollListener(mainDom, (isIn) => setTransState(isIn))

    const validate = () => {
        var errorMsg = ''
        if (name === '') errorMsg = 'Name required'
        if (email === '') errorMsg = 'Email required'
        if (!email.match(/@.*\./)) errorMsg = 'Invalid Email'
        if (content === '') errorMsg = 'Content required'

        setErrorMsg(errorMsg)
        if (errorMsg !== '') {
            setTimeout(() => { setErrorMsg(''); console.log('hide!') }, 4000)
            return false
        }
        return true
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validate()) return

        emailjs.send('service_s2du2od', 'template_dqmuthk', {
            from_name: name,
            message: content,
            from_email: email
        }, 'user_z7fnBEw9AAY4ybnnXG6f8')
            .then((_) => {
                setPopup(true)
            }, (_) => {
                setErrorMsg('Email not sent')
                setTimeout(() => { setErrorMsg(''); console.log('hide!') }, 4000)
            })
    }

    return (
        <div ref={refHandler} id="contactme" className={`${className}`}>
            <div className="bg-deep-blue w-screen h-screen flex justify-center items-center overflow-x-hidden z-0 relative">
                <Popup trigger={popup} onCloseButtonClicked={() => setPopup(false)}>
                    <div>
                        <h1 className="font-main text-light text-dark-grey text-3xl">Thanks!</h1>
                        <p className="font-main text-dark-grey">Your email has been sent, I'll get back to you as soon as I can!</p>
                    </div>
                </Popup>
                <HomeButton trigger={transition}/>
                <motion.div
                    animate={{ clipPath: transition ? 'inset(0% 0 0% 0)' : 'inset(50% 0 50% 0)' }}
                    transition={{ duration: 0.2 }}
                    className="bg-red rounded-2xl w-11/12 lg:w-3/4 h-4/6 px-5 py-3">
                    <form onSubmit={submit} className="flex flex-col w-full h-full">
                        <h1 className="font-main text-off-white font-light text-4xl mb-2">Say hello!</h1>
                        <p className="font-main text-sm lg:text-base text-off-white font-light mb-5 whitespace-pre-line">
                            Send me an email through this form or through one of my emails: <a href="mailto:lefantan@hotmail.com" className="text-antique-white font-medium"><u>lefantan@hotmail.com</u></a> or <a href="mailto:tan6@ualberta.ca" className="text-antique-white font-medium"><u>tan6@ualberta.ca</u></a>
                        </p>
                        <div className="flex w-full h-8 mb-3">
                            <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} placeholder="Your name" className="px-2 w-1/2 mr-5 input" />
                            <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} placeholder="Your email" className="px-2 w-1/2 input" />
                        </div>
                        <textarea placeholder="Hello Lefan..." onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} value={content}
                            className="px-2 py-1 w-full flex-grow input" />
                        <div className="flex items-center">
                            <p className={`small-light-text text-antique-white text-base font-medium transition duration-100ms ${error === '' ? 'hidden' : 'visible'}`}>*{error}</p>
                            <button type="submit" className="m-2 mr-0 px-1.5 py-0.5 ml-auto flex justify-center bg-off-white text-red rounded-md whitespace-pre transition duration-100 hover:bg-off-white-hover transform active:scale-90"><RiSendPlaneFill className="h-full w-6 mr-2" />Send </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}