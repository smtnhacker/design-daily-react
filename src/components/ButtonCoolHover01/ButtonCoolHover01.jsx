import { IconContext } from "react-icons"
import { FaArrowRight } from "react-icons/fa"

import styles from "./styles.module.css"

const ButtonCoolHover01 = () => {
    return (
        <button className={styles.btn}>
            <span className={styles.circle} aria-hidden>
                <IconContext.Provider value={{ color: "var(--white)", size: "2rem"}}>
                    <span className={styles.arrow}>
                        <FaArrowRight />   
                    </span>
                </IconContext.Provider>
            </span>
            <span className={styles.text}>Learn More</span>
        </button>
    )
} 

export const meta = {
    title: "Button Cool Hover 01",
    date: "November 13, 2022",
    inspiration: "https://codepen.io/kathykato/pen/rZRaNe",
    description: "A button that has a circle that fills the button whenever the button is hovered."
}

export default ButtonCoolHover01
