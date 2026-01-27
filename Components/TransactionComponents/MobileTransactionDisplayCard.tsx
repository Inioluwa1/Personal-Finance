import React from 'react'
import Image from "next/image"
import styles from "./TransactionComponents.module.css"
import { Transaction, CategoryImageMap } from '@/app/Interface'

export default function MobileTransactionDisplayCard({transaction}: {transaction: Transaction}) {
  const categoryImage = CategoryImageMap[transaction.category]
  return (
    <div className={styles.mobileTransactionDisplayCard}>
      <Image src={categoryImage} width={70} height={70} alt={transaction.category} className={styles.mobileTransactionItemImage} />
      <div className={styles.mobileTransactionDetails}>
        <div className={styles.mobileTransactionIndividualDetails}>
          <p> {transaction.itemBought} </p>
          <p> #{transaction.price} </p>
        </div>
        <div className={styles.mobileTransactionIndividualDetails}>
          <p> {transaction.category} </p>
          <p> {transaction.date} </p>
        </div>
      </div>
    </div>
  )
}

