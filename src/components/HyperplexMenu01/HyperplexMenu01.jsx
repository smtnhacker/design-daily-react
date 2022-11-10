import styles from "./styles.module.css"

const HyperplexMenu01 = () => {
    
    const setIndex = (e, index) => {
        e.target.parentNode.parentNode.dataset.activeIndex = index;
    }

    return (
        <div className={styles.menu}>
            <div className={styles["menu-items"]}>
                <div className={styles["menu-item"]} onMouseOver={(e) => setIndex(e, 0)}>Home</div>
                <div className={styles["menu-item"]} onMouseOver={(e) => setIndex(e, 1)}>Shop</div>
                <div className={styles["menu-item"]} onMouseOver={(e) => setIndex(e, 2)}>About</div>
                <div className={styles["menu-item"]} onMouseOver={(e) => setIndex(e, 3)}>Contact Us</div>
            </div>
            <div className={styles["menu-background-pattern"]}></div>
        </div>
    )
}

export const meta = {
    title: "Hyperplex Menu Tutorial",
    date: "November 12, 2022",
    inspiration: "https://www.youtube.com/watch?v=NUeCNvYY_x4",
    description: "Full screen menu with parallax effect"
}

export default HyperplexMenu01;