"use client"

import React from 'react'
import Image from 'next/image';
import styles from './DailySpending.module.css'
import { useSelector } from 'react-redux';
import { State } from "@/app/Interface"
import { CategoryImageMap } from '@/app/Interface';

export default function DailySpendingDisplay() {
  const transactions = useSelector((state: State) => state.transactions.transactions)
  
  return (
    <div className={styles.displayContainer}>
      {transactions.map(transaction => {
        const categoryImage = CategoryImageMap[transaction.category];
        return (
        <div key={transaction.id} className={styles.transactionItem}> 
        <p>
          {transaction.itemBought}
        </p>
        <Image src={categoryImage} width={90} height={90} alt={transaction.itemBought} />
        </div>
      )})}
    </div>
  )
}
