
import styles from "./styles.module.css"

const FilterModal01 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>Filter</h1>
                <button className={styles.close}>
                    X
                </button>
            </div>
            <div className={styles.search}>
                <label>
                    <span>Search by Keyword</span>
                    <input type="text" name="keyword" className={styles["search-bar"]} placeholder="Search jobs" />
                </label>
            </div>
            <div className={styles.radio}>
                <fieldset>
                    <legend>View</legend>
                    <div className={styles["radio-group"]}>
                        <label className={styles["radio-item"]}>
                            <input type="radio" name="view" value="all" />
                            All job posts
                        </label>
                        <label className={styles["radio-item"]}>
                            <input type="radio" name="view" value="active" />
                            Active job posts
                        </label>
                        <label className={styles["radio-item"]}>
                            <input type="radio" name="view" value="archived" />
                            Archived job posts
                        </label>
                    </div>
                </fieldset>
            </div>
            <div className={styles.checkbox}>
                <fieldset>
                    <legend>Include</legend>
                    <div className={styles["checkbox-group"]}>
                        <label className={styles["checkbox-item"]}>
                            <input type="checkbox" name="shared" />
                            Jobs shared with me
                        </label>
                    </div>
                </fieldset>
            </div>
            <button className={styles["apply-btn"]}>
                Apply
            </button>
        </div>
    )
} 

export const meta = {
    title: "Filter Modal 1",
    date: "November 15, 2022",
    inspiration: "https://uidesigndaily.com/posts/figma-filter-modal-day-1569",
    description: "A filter modal that has a text input, radio buttons, and checkboxes."
}

export default FilterModal01
