import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "@/assets/styles/Components.module.css"

export default function TransactionsCard() {
  return (
  <div className={styles.Container}>
      <div className={styles.Header}> 
        <p> Transactions </p>
        <Link href="/Transactions" className={styles.Link}> 
          View All 
          <Image src="assets/images/icon-caret-right.svg" alt="Next" width={10} height={10} className={styles.LinkImage} />
        </Link>
      </div>
      <div>
        
      </div>
    </div>
  )
}
