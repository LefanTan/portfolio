import React from "react"
import { memo } from "react"
import { BasicProp } from "./Interfaces"

export const Block = memo(({children, className} : BasicProp) => {
    return(
        <div className={`h-full w-full lg:mb-5 ${className}`}>
          {children}
        </div>
    )
})