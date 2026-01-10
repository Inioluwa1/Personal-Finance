import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "@/assets/styles/Sidebar.module.css"


export default function PotsCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}> 
        <p> Pots </p>
        <Link href="/Pots" className={styles.Link}> 
          See Details 
          <Image src="assets/images/icon-caret-right.svg" alt="Next" width={10} height={10} className={styles.LinkImage} />
        </Link>
      </div>
      <div className={styles.PotsContainer}>
        <div className={styles.PotsSaved}>
          <Image src="assets/images/icon-pot.svg" alt="Pot Image" width={40} height={40}/>
          <div>
            <p> Total Saved </p>
            <h1> $850 </h1>
          </div>
        </div>
        <div className={styles.PotsCategories}>
          <div className={styles.Pots1}>
            <p> Savings </p>
            <h2> $159 </h2>
          </div>
          <div className={styles.Pots2}>
            <p> Gift </p>
            <h2> $40 </h2>
          </div>
          <div className={styles.Pots3}>
            <p> Concert Ticket </p>
            <h2> $110 </h2>
          </div>
          <div className={styles.Pots4}>
            <p> New Laptop </p>
            <h2> $10 </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
