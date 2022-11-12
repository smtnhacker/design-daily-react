import { IconContext } from "react-icons"
import { FaStar, FaSearch } from "react-icons/fa"

import styles from "./styles.module.css"

const RatingSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>What others think about the product</h3>
                <div className={styles.average}>
                    <div className={styles["average-info"]}>
                        <IconContext.Provider value={{ color: "var(--yellow)", size: "1.5rem" }}>
                        <i><FaStar /></i>
                        <span>4.6</span>
                        </IconContext.Provider>
                    </div>
                    <div className={styles["average-title"]}>Average customer rating</div>
                </div>
            </div>
            <div className={styles["search-container"]}>
                <label>
                    <i><FaSearch /></i>
                    <input type="text" name="topic-search" className={styles.search} placeholder="Search topics and reviews" />
                </label>
            </div>
            <div className={styles["rating-container"]}>
                <div className={styles["rating-header"]}>Reviews</div>
                <div className={styles["rating-list"]}>
                    <IconContext.Provider value={{ color: "var(--yellow)", size: "1rem" }}>
                    <label className={styles["rating-item"]}>5 <FaStar /><meter value="106" min="0" max="150"></meter>106</label>
                    <label className={styles["rating-item"]}>4 <FaStar /><meter value="32" min="0" max="150"></meter>32</label>
                    <label className={styles["rating-item"]}>3 <FaStar /><meter value="6" min="0" max="150"></meter>6</label>
                    <label className={styles["rating-item"]}>2 <FaStar /><meter value="4" min="0" max="150"></meter>4</label>
                    <label className={styles["rating-item"]}>1 <FaStar /><meter value="2" min="0" max="150"></meter>2</label>
                    </IconContext.Provider>
                </div>
            </div>
            <div className={styles["cta-container"]}>
                <button className={styles.cta}>Write a review</button>
            </div>
        </div>
    )
} 

export const meta = {
    title: "RatingSection",
    date: "November 12, 2022",
    inspiration: "https://uidesigndaily.com/posts/figma-reviews-day-1573",
    description: "A simple rating section that shows a summary of the customer ratings."
}

export default RatingSection
