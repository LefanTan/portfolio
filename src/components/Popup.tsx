import styles from './Popup.module.css'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useEffect, useRef } from 'react'
import { BasicProp } from './Interfaces'
import { motion } from 'framer-motion'

interface PopupProp extends BasicProp {
    trigger: boolean
    onCloseButtonClicked: () => void
}

export default function Popup(props: PopupProp) {
    var contentRef = useRef<HTMLInputElement | null>(null)

    // Ideally, this can be convereted into a hook (useClickOutside)
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
                props.onCloseButtonClicked()
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <>
            {props.trigger && <div className={styles.popup}>
                <motion.div
                    animate={{ opacity: props.trigger ? 1 : 0 }}
                    initial={{ opacity: 0 }}
                    transition={{duration: 0.2}}
                    ref={contentRef} className={styles.popupContent}>
                    {props.children}
                    <button onClick={props.onCloseButtonClicked} className={styles.closeButton}><IoCloseCircleOutline className={styles.closeIcon} /></button>
                </motion.div>
            </div>}
        </>
    )
}