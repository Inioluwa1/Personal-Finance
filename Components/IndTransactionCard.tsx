import React from 'react'
import Image from 'next/image'
import styles from "@/assets/styles/Components.module.css"
import { Transaction, CategoryImageMap } from '@/app/Interface'

export default function IndTransactionCard({transaction}:{transaction: Transaction}) {
  
  const categoryImage = CategoryImageMap[transaction.category]

  return (
    <div className={styles.indTransactionCardContainer}>
      <Image src={categoryImage} width={50} height={50} alt={transaction.category}/>
      <p className={styles.IndTransactionCardItem}> {transaction.itemBought} </p>
      <p className={styles.IndTransactionCardCategory}> {transaction.category} </p>
      <p className={styles.IndTransactionCardPrice}> #{transaction.price} </p>
    </div>
  )
}
