import React from 'react'
import styles from "@/assets/styles/Components.module.css"

export default function BalanceCard() {
  return (
    <div className={styles.CardContainer} >
      <div className={styles.Card}>
        <p> Current Balance </p>
        <h1> $4,836.00 </h1>
      </div>
      <div className={styles.Card2}>
        <p> Income </p>
        <h1> $3,814.25 </h1>
      </div>
      <div className={styles.Card2}>
        <p> Expenses </p>
        <h1> $1,700.50 </h1>
      </div>
    </div>
  )
}
