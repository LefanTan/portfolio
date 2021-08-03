import React from "react"
import { memo } from "react"
import { BasicProp } from "./Interfaces"

export const Block = memo(({children, className} : BasicProp) => {
    return(
        <div className={`${className} bg-transparent w-10/12 h-fit lg:w-2/5 lg:h-2/5 m-3`}>
          {children}
        </div>
    )
})