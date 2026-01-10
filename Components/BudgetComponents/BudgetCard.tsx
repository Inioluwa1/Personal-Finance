import React from 'react'
import styles from "./BudgetComponent.module.css"

export default function BudgetCard() {
  return (
    <div className={styles.BudgetCardContainer}>
      <div className={styles.Entertainment}>
        <span className={styles.Dot}> </span>
        <h3> Entertainment </h3>
      </div>
      <div>
        <p> Maximum of $50.00</p>
        <div className={styles.ProgressBar}>
          <div className={styles.ProgressBarFill} style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className={styles.SpentnRemaining}> 
        <div className={styles.Spent}>
          <p> Spent </p>
          <h4> $15.00 </h4>
        </div>
        <div className={styles.Remaining}>
          <p> Remaining </p>
          <h4> $35.00 </h4>
        </div>
      </div>
    </div>
  )
}
