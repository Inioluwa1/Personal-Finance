import React from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from "@/assets/styles/Components.module.css"

export default function RecurringCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}> 
        <p> Recurring Bills </p>
        <Link href="/RecurringBills" className={styles.Link}> 
          See Details 
          <Image src="assets/images/icon-caret-right.svg" alt="Next" width={10} height={10} className={styles.LinkImage} />
        </Link>
      </div>
      <div className={styles.ReoccuringContainer}>
        <div className={styles.Reoccured1}>
          <p> Paid Bills </p>
          <h2> $190.00 </h2>
        </div>
        <div className={styles.Reoccured2}>
          <p> Total Upcoming </p>
          <h2> $194.98 </h2>
        </div>
        <div className={styles.Reoccured3}>
          <p> Due Soon </p>
          <h2> $59.58 </h2>
        </div>
        <div className={styles.Reoccured4}>
          <p> Airtime </p>
          <h2> $10.00 </h2>
        </div>
      </div>
    </div>
  )
}
