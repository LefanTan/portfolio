import { RefObject } from "react";

export interface BasicProp {
    className?: string
    children?: React.ReactNode
    ref?: RefObject<any>
}
