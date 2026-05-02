"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "@/assets/styles/Components.module.css"
import { useAppSelector } from '@/app/store/hook'
import { filteredTransactions } from '@/app/store/TransactionSelectors'
import IndTransactionCard from './IndTransactionCard'

export default function TransactionsCard() {
  const transactions = useAppSelector(filteredTransactions)
  const slicedTransactions = transactions.slice(0, 5)

  return (
  <div className={styles.Container}>
      <div className={styles.Header}> 
        <p> Transactions </p>
        <Link href="/Dashboard/Transactions" className={styles.Link}> 
          View All 
          <Image src="assets/images/icon-caret-right.svg" alt="Next" width={10} height={10} className={styles.LinkImage} />
        </Link>
      </div>
      <div>
        {slicedTransactions.map(transaction => 
          <IndTransactionCard 
            key={transaction.id}
            transaction={transaction}
          />
        )}
      </div>
    </div>
  )
}
