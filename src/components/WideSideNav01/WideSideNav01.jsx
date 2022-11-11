import { IconContext } from "react-icons"
import { FaDesktop, FaLock, FaEnvelope, FaReceipt, FaTh, FaSignOutAlt } from "react-icons/fa"

import styles from "./styles.module.css"

const WideSideNav01 = () => {

    const setActive = (e, index) => {
        Array.from(e.target.parentNode.children).forEach(button => {
            if (button.dataset.index === index.toString()) {
                button.dataset.active = true;
            } else {
                button.dataset.active = false;
            }
        })
    }

    return (
        <nav className={styles.nav}>
            <IconContext.Provider value={{ size: "1rem" }}>
            <div className={styles["nav-main"]}>
                <div className={styles.profile}>
                    <div className={styles["profile-pic"]}>
                        <img src="assets/sample_profile_pic.webp" alt="Profile Pic" />
                    </div>
                    <div className={styles["profile-details"]}>
                        <div className={styles["profile-name"]}>John Doe</div>
                        <div className={styles["profile-handle"]}>@JohnDoe</div>
                    </div>
                </div>
                <div className={styles["main-list"]}>
                    <button className={styles.item} data-index="0" onClick={e => setActive(e, 0)}>
                        <i className={styles.icon}><FaDesktop /></i>
                        <div>General</div>
                    </button>
                    <button className={styles.item} data-index="1"onClick={e => setActive(e, 1)}>
                        <i className={styles.icon}><FaLock /></i>
                        Password
                    </button>
                    <button className={styles.item} data-index="2"onClick={e => setActive(e, 2)}>
                        <i className={styles.icon}><FaEnvelope /></i>
                        Invitations
                    </button>
                    <button className={styles.item} data-index="3"onClick={e => setActive(e, 3)}>
                        <i className={styles.icon}><FaReceipt /></i>
                        Billing
                    </button>
                    <button className={styles.item} data-index="4"onClick={e => setActive(e, 4)}>
                        <i className={styles.icon}><FaTh /></i>
                        Apps
                    </button>
                </div>
            </div>
            <div className={styles.logout}>
                <button className={styles.item}>
                    <i className={styles.iconn}><FaSignOutAlt /></i>
                    Log out
                </button>
            </div>
            </IconContext.Provider>
        </nav>
    )
}

export const meta = {
    title: "Wide Side Nav 1",
    date: "November 11, 2022",
    inspiration: "https://uidesigndaily.com/posts/figma-billing-page-payment-day-1585",
    description: "A side side nav that shows the tab names and highlights the active page."
}

export default WideSideNav01