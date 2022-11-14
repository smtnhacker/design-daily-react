import "chart.js/auto"
import { Doughnut } from "react-chartjs-2"
import styles from "./styles.module.css"

const SimpleAnalytics = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Traffic Source Types</h1>
                <p className={styles.subtitle}>Views Last 28 Days</p>
            </div>
            <div className={styles.main}>
                <div className={styles["pie-container"]}>
                    <Doughnut 
                        datasetIdKey="id"
                        data={{
                            labels: ["Channel Pages", "Direct or Unknown", "Search", "External"],
                            datasets: [{
                                data: [0.375, 0.336, 0.11, 0.06],
                                backgroundColor: [
                                    '#5786F5',
                                    '#DBE3F6',
                                    '#94B1F9',
                                    '#858CAF'
                                ]
                            }]
                        }}
                        options={{ 
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                         }}
                        width={"300px"}
                        height={"300px"} 
                    />
                </div>
                <div className={styles["bars-container"]}>
                    <label className={styles["bar-item"]}><span>Channel Pages</span> <meter max="1" value="0.375"></meter> 37.5%</label>
                    <label className={styles["bar-item"]}><span>Direct or Unknown</span><meter max="1" value="0.336"></meter> 33.6%</label>
                    <label className={styles["bar-item"]}><span>Search</span><meter max="1" value="0.11"></meter> 11%</label>
                    <label className={styles["bar-item"]}><span>External</span><meter max="1" value="0.06"></meter> 6%</label>
                </div>
            </div>
        </div>
    )
} 

export const meta = {
    title: "Simple Analytics",
    date: "November 14, 2022",
    inspiration: "https://uidesigndaily.com/posts/figma-analytics-statistics-day-1567",
    description: "A simple analytics component using a doughnut and a bar graph."
}

export default SimpleAnalytics
