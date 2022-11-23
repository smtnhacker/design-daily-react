import { IconContext } from "react-icons"
import { FaPaypal } from "react-icons/fa"
import styles from "./styles.module.css"

const PricingCard01 = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Try FREE for 4 weeks</h1>
                <p className={styles.subtitle}>
                    We uncover the facts around the clock, all over the globe.
                </p>
            </div>
            <form className={styles.form}>
                <label className={styles.option} data-active="true">
                    <input type="radio" name="promo" value="monthly" selected/>
                    <div className={styles.detail}>
                        <div className={styles.plan}>Monthly</div>
                        <div className={styles.promo}>4 weeks for free</div>
                        <div className={styles.subpromo}>Then $3 every month for the first year</div>
                    </div>
                </label>
                <label className={styles.option} data-active="false">
                    <input type="radio" name="promo" value="yearly" />
                    <div className={styles.detail}>
                        <div className={styles.plan}>Yearly</div>
                        <div className={styles.promo}>4 weeks for free</div>
                        <div className={styles.subpromo}>Then $20 for the first year</div>
                    </div>
                </label>
            </form>
            <button className={styles["btn-primary"]}>
                Continue
            </button>
            <button>
                Continue with <IconContext.Provider value={{size: "0.8rem"}}><FaPaypal /></IconContext.Provider>
            </button>
        </div>
    )
} 

export const meta = {
    title: "Pricing Card 1",
    date: "November 23, 2022",
    inspiration: "https://uidesigndaily.com/posts/figma-pricing-card-subscribe-day-1566",
    description: "A simple pricing card that has few available options"
}

export default PricingCard01
