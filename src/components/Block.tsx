import React from "react"
import { memo } from "react"
import { BasicProp } from "./Interfaces"

export const Block = memo(({children, className} : BasicProp) => {
    return(
        <div className={`h-full w-full lg:w-1/2 ${className}`}>
          {children}
        </div>
    )
})