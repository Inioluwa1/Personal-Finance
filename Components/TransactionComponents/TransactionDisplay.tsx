"use client"

import React from 'react'
import TransactionInput from './TransactionInput'
import DesktopTransactionDisplayCard from './DesktopTransactionDisplayCard'
import MobileTransactionDisplayCard from './MobileTransactionDisplayCard'
import styles from "./TransactionComponents.module.css"
import { usePaginationContext } from '@/app/context/PaginationContext'

export default function TransactionDisplay() {
  const { currentTransactions } = usePaginationContext();
  
  return (
    <div>
      <TransactionInput />
      <div className={styles.tableHeader}>
        <p className={styles.itemBought}> Recipient/Item Bought </p>
        <p className={styles.info}> Category </p>  
        <p className={styles.info}> Transaction Date </p>
        <p className={styles.info}> Amount </p>
      </div>
      <div className={styles.desktopView}>
        {currentTransactions.map(transaction => <DesktopTransactionDisplayCard key={transaction.id} transaction={transaction} />)}
      </div>
      <div className={styles.mobileView}>
        {currentTransactions.map(transaction => <MobileTransactionDisplayCard key={transaction.id} transaction={transaction} />)}
      </div>
    </div>
  )
}
