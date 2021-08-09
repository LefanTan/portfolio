import { useCallback, useEffect } from "react"

export function isElementInViewporHorizontal(el : HTMLInputElement | null) : boolean { 
    if(el === null) return false
    
    var elRect = el.getBoundingClientRect()
    var elWidth = elRect.width

    return(
        ((elRect.left <= 0 && elRect.right >= elWidth / 2 && elRect.left >= -elWidth / 2) ||
         (elRect.left > 0 && elRect.right <= window.innerWidth * 1.5 && elRect.left <= window.innerWidth / 2))
    )
}

export function useScrollListener(el: HTMLInputElement | null, callback : (inElement : boolean) => void) {
    const handler = useCallback(() => {
        var scrollCallback = window.requestAnimationFrame || function(callback) {setTimeout(callback, 2000/60)}
        scrollCallback(() => {
            // console.log("Left " + el?.getBoundingClientRect().left)
            // console.log("RIGHT " + el?.getBoundingClientRect().right)
            // console.log( el?.getBoundingClientRect().width)
            return callback(isElementInViewporHorizontal(el))
        })
    }, [callback, el])

    useEffect(() => {
        document.querySelector('main')?.addEventListener('scroll', handler)
        return(() => {
            document.querySelector('main')?.removeEventListener('scroll', handler)
        })
    }, [handler, el])
}