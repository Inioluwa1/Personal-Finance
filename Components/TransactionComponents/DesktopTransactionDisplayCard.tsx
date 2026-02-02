import React from 'react'
import Image from "next/image"
import styles from './TransactionComponents.module.css'
import { Transaction, CategoryImageMap } from '@/app/Interface'
import { MdDelete } from 'react-icons/md'
import { deleteTransaction } from '@/app/store/TransactionSlice'
import { useDispatch } from 'react-redux'

export default function DesktopTransactionDisplayCard({transaction}: {transaction: Transaction}) {
  const dispatch = useDispatch();

  const handleDelete = (id:number) => {
    dispatch(deleteTransaction(id));
  }

  const categoryImage = CategoryImageMap[transaction.category]
  return (
    <div className={styles.desktopTransactionDisplayCard}>
      <div className={styles.desktopTransactionItem}>
        <Image src={categoryImage} width={50} height={50} alt={transaction.category} className={styles.desktopTransactionItemImage} />
        <p className={styles.desktopTransactionItemBought}> {transaction.itemBought} </p>
      </div>
      <p className={styles.desktopTransactionItemCategory}> {transaction.category} </p>
      <p className={styles.desktopTransactionItemDate}> {transaction.date} </p>
      <p className={styles.desktopTransactionItemPrice}> #{transaction.price} </p>
      <MdDelete className={styles.close} onClick={() => handleDelete(transaction.id)} />
    </div>
  )
}
