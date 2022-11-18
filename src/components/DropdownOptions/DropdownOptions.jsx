import { useRef, useEffect } from "react"
import { IconContext } from "react-icons"
import { FaEllipsisH } from "react-icons/fa"

import styles from "./styles.module.css"

const DropdownOptions = () => {
    const containerRef = useRef()

    useEffect(() => {
        window.addEventListener('click', (e) => containerRef.current.dataset.active = "false")
    })

    const toggle = (e) => {
        e.preventDefault();
        const state = containerRef.current.dataset.active;
        if (state === "false") {
            containerRef.current.dataset.active = "true";
        } else {
            containerRef.current.dataset.active = "false";
        }
        e.stopPropagation();
    }

    return (
        <div className={styles.container} ref={containerRef} data-active="false">
            <div className={styles.trigger} onClick={e => toggle(e)}>
                <IconContext.Provider value={{ size: "2.5rem" }}>
                    <FaEllipsisH />
                </IconContext.Provider>
            </div>
            <div className={styles.content}>
                <div className={styles.item}>Create</div>
                <div className={styles.item}>Edit</div>
                <div className={styles.item}>Delete</div>
            </div>
        </div>
    )
} 

export const meta = {
    title: "Options Dropdown",
    date: "November 18, 2022",
    inspiration: "Laravel Breeze x-dropdown Component",
    description: "A dropdown that looks like a modern options menu."
}

export default DropdownOptions
