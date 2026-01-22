import React from 'react'
import TransactionInput from '@/Components/TransactionComponents/TransactionInput'
import TransactionDisplay from '@/Components/TransactionComponents/TransactionDisplay'
import TransactionFooter from '@/Components/TransactionComponents/TransactionFooter'
import styles from './Transactions.module.css'

export default function TransactionPage() {
  return (
    <div className={styles.transactionContainer}>
      <h1> Transactions </h1>
      <div className={styles.displayContainer}>
        <div className={styles.transactionInput}>
          <TransactionInput />
        </div>
        <div>
          <TransactionDisplay />
        </div>
        <TransactionFooter />
      </div>
    </div>
  )
}
