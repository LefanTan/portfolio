import React, { useCallback, useState } from "react";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import { animated, useSpring } from "react-spring";
import { useScrollListener } from "./Hooks";
import { BasicProp } from "./Interfaces";

export const AboutMe = memo(({ className }: BasicProp) => {

    const [mainDom, setMainDode] = useState<HTMLInputElement | null>(null)
    const [transition, setTransState] = useState(false)

    const refHandler = useCallback((node: HTMLInputElement) => {
        if (node !== null) { 
            setMainDode (node)
        }
    }, [])

    useScrollListener(mainDom, (isIn) => setTransState(isIn))

    // const deepBlueBg = useSpring({
    //     background: `linear-gradient(${isMobile ? '30deg' : '60deg'}, ${getComputedStyle(document.body).getPropertyValue('--deep-blue-shade')} 50%, transparent 50%)`,
    //     from: { transform: `translateX(-18%)` },
    //     transform: `translateX(-10%)`,
    //     config: { mass: 2, friction: 60 },
    //     zIndex: 20,
    //     reset: true,
    //     reverse: !transition
    // })
    
    // const redBg = useSpring({
    //     background: `linear-gradient(-20deg, ${getComputedStyle(document.body).getPropertyValue('--red')} 50%, transparent 50%)`,
    //     from: { transform: `translateX(40%)` },
    //     transform: `translateX(20%)`,
    //     config: { mass: 2, friction: 60 },
    //     zIndex: 20,
    //     reset: true,
    //     reverse: !transition
    // })

    return (
        <div id="aboutme" ref={refHandler} className={`${className} bg-transparent`}>
            <div className="bg-transparent w-screen h-screen flex justify-center items-center overflow-hidden relative">
                {/* <div className="absolute top-0 bottom-0 -left-1/2 -right-1/2 drop-shadow-lg" />
                <div className="absolute top-0 bottom-0 -left-1/2 -right-1/2 drop-shadow-lg" /> */}
                <div className="w-screen flex justify-center items-center z-50">
                    
                </div>
            </div>
        </div>
    )
})