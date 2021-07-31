import React from "react"

interface Props{
    className? : string
} 

export const Block : React.FC<Props> = ({children, className}) => {
    return(
        <div className={`${className} shadow-md w-10/12 lg:w-2/5 lg:h-2/5 m-4 mb-0 p-4 pl-5 pr-5`}>
          {children}
        </div>
    )
}