"use client"

import React from 'react'
import { useMediaQuery } from '@/app/context/DesktopSize'
import DesktopTransactionDisplayCard from './DesktopTransactionDisplayCard'
import MobileTransactionDisplayCard from './MobileTransactionDisplayCard'
import styles from "./TransactionComponents.module.css"
import { usePaginationContext } from '@/app/context/PaginationContext'

export default function TransactionDisplay() {
  const isDesktop = useMediaQuery("(min-width:768px")
  const { currentTransactions } = usePaginationContext();
  
  return (
    <div>
      <div className={styles.tableHeader}>
        <p className={styles.itemBought}> Recipient/Item Bought </p>
        <p className={styles.info}> Category </p>
        <p className={styles.info}> Transaction Date </p>
        <p className={styles.info}> Amount </p>
      </div>
      {
        isDesktop?
          currentTransactions.map(transaction => 
            <DesktopTransactionDisplayCard
              key={transaction.id}
              transaction={transaction} 
            />
          ) :
          currentTransactions.map(transaction => 
            <MobileTransactionDisplayCard
              key={transaction.id}
              transaction={transaction} 
            />
          )
      }
    </div>
  )
}
