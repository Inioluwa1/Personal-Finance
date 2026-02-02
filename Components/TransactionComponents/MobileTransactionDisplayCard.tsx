import React from 'react'
import Image from "next/image"
import styles from "./TransactionComponents.module.css"
import { Transaction, CategoryImageMap } from '@/app/Interface'
import { MdDelete } from 'react-icons/md'
import { deleteTransaction } from '@/app/store/TransactionSlice'
import { useDispatch } from 'react-redux'

export default function MobileTransactionDisplayCard({transaction}: {transaction: Transaction}) {
  const dispatch = useDispatch();

  const handleDelete = (id:number) => {
    dispatch(deleteTransaction(id));
  }

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
      <MdDelete className={styles.close} onClick={() => handleDelete(transaction.id)} />
    </div>
  )
}

