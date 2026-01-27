"use client"

import React from 'react'
import Image from 'next/image';
import styles from './DailySpending.module.css'
import { useSelector } from 'react-redux';
import { State, CategoryImageMap } from "@/app/Interface"
import { MdDelete } from 'react-icons/md';

export default function DailySpendingDisplay() {
  const transactions = useSelector((state: State) => state.transactions.transactions)

  const formatDate = (dateStr:string):string => {
    const [year, month, day] = dateStr.split("-")
    const Dday = day.slice(0, 2)
    return `${Dday}/${month}/${year}`
  }

  const date = new Date().toISOString();
  const todaysDate = formatDate(date)
  
  const todaysTransactions = transactions.filter(transaction => transaction.date === todaysDate) 

  return (
    <div className={styles.displayContainer}>
      {todaysTransactions.map(transaction => {
        const categoryImage = CategoryImageMap[transaction.category];
        return (
        <div key={transaction.id} className={styles.transactionItem}>
          <Image src={categoryImage} width={70} height={70} alt={transaction.itemBought} className={styles.transactionItemImage} />
          <div className={styles.transctionItemDetailsContainer}>
            <div className={styles.transactionItemDatenClose}>
              <p className={styles.transactionItemDate}> {transaction.date} </p>
              <MdDelete className={styles.close} />
            </div>
            <div className={styles.transactionItemDetails}>
              <p className={styles.transactionItemBought}> {transaction.itemBought} </p>
              <p className={styles.transactionItemPrice}> #{transaction.price} </p>
            </div>
          </div>
        </div>
      )})}
    </div>
  )
}
