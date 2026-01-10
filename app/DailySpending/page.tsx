import React from 'react'
import styles from './DailySpending.module.css'
import DailySpendingForm from '@/Components/DailySpendingComponents/DailySpendingForm'

export default function DailySpending() {
  return (
    <div>
      <h1> Daily Spending </h1>
        <div className={styles.Form}> 
          <DailySpendingForm />
        </div>
        <div className={styles.Display}> 
          Display
        </div>
      </div>
  )
}
