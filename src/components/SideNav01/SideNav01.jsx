import { IconContext } from "react-icons";
import { FaHome,FaChartBar, FaBath, FaCamera, FaDatabase, FaGlobeAmericas, FaCog } from "react-icons/fa";

import styles from "./styles.module.css";

const SideNav01 = () => {
    return (
        <nav className={styles.nav}>
            <IconContext.Provider value={{ color: "var(--primary)", size: "1.2em" }}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    S
                </div>
                <div className={styles["main-list"]}>
                    <button className={styles.icon}>
                        <FaHome />
                    </button>
                    <button className={styles.icon}>
                        <FaChartBar />
                    </button>
                    <button className={styles.icon}>
                        <FaBath />
                    </button>
                        <button className={styles.icon}>
                        <FaCamera />
                    </button>
                        <button className={styles.icon}>
                        <FaDatabase />
                    </button>
                </div>
            </div>
            <div className={styles.personal}>
                <button className={styles.icon}>
                    <FaGlobeAmericas />
                </button>
                <button className={styles.icon}>
                    <FaCog />
                </button>
                <button className={styles.profile}>
                    <img src="assets/sample_profile_pic.webp" alt="profile pic" />
                </button>
            </div>
            </IconContext.Provider>
        </nav>
    )
}

export const meta = {
    title: "Side Navigation Bar 1",
    date: "November 11, 2022",
    inspiration: "https://dribbble.com/shots/17564399-Orders-and-invoices-dashboard-Untitled-UI",
    description: "Just a standard collapsed side bar"
}

export default SideNav01