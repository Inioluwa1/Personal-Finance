import React from 'react'
import styles from "./TransactionComponents.module.css"
import { Category, SortOption } from '@/app/Interface'
import { IoIosSearch } from 'react-icons/io'
import { useAppDispatch } from '@/app/store/hook'
import { setSearchQuery, setSelectedCategory, setSortOption } from '@/app/store/TransactionSlice'
import { usePaginationContext } from '@/app/context/PaginationContext'

export default function TransactionInput() {
  const dispatch = useAppDispatch()
  const { setCurrentPage }  = usePaginationContext();
  
  return (
    <div className={styles.transactionInputContainer}> 
      <div className={styles.inputContainer}>
        <input 
          type='text' 
          placeholder='Search transaction'
          onChange={e => dispatch(setSearchQuery(e.target.value))}
        />
        <IoIosSearch />
      </div>
      <div className={styles.chooseInput}>
        <div className={styles.sortBy}>
          <label> Sort by </label>
          <select 
            name="sort" 
            className={styles.sortBySelect}
            onChange={(e) => {
              dispatch(setSortOption(e.target.value as SortOption))
              setCurrentPage(1)
            }}
          >
            <option value="latest"> Latest </option>
            <option value="oldest"> Oldest </option>
            <option value="a-z"> A to Z </option>
            <option value="z-a"> Z to A </option>
            <option value="highest"> Highest </option>
            <option value="lowest"> Lowest </option>
          </select>
        </div>
        <div  className={styles.category}>
          <label> Category </label>
          <select 
            name="category"
            className={styles.categorySelect} 
            onChange={(e) => {
              dispatch(setSelectedCategory(e.target.value as Category | "all"))
              setCurrentPage(1)
            }}
            >
            <option value="all"> All transactions </option>
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
