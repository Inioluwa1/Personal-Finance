import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import styles from "./TransactionComponents.module.css"

export default function TransactionInput() {
  return (
    <div className={styles.transactionInputContainer}>
      <div className={styles.inputContainer}>
        <input type='text' placeholder='Search transaction' />
        <IoIosSearch />
      </div>
      <div className={styles.chooseInput}>
        <div className={styles.sortBy}>
          <label> Sort by </label>
          <select className={styles.sortBySelect}>
            <option> Latest </option>
            <option> Oldest </option>
            <option> A to Z </option>
            <option> Z to A </option>
            <option> Highest </option>
            <option> Lowest </option>
          </select>
        </div>
        <div  className={styles.category}>
          <label> Category </label>
          <select className={styles.categorySelect}>
            <option> All transactions </option>
            <option value="Food"> Food </option>
            <option value="Transportation"> Transportation </option>
            <option value="Entertainment"> Entertainment </option>
            <option value="Utilities"> Utilities </option>
            <option value="Others"> Others </option>
          </select>
        </div>
      </div>
    </div>
  )
}
