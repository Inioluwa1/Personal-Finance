"use client"

import React from 'react'
import Image from 'next/image'
import styles from "./TransactionComponents.module.css"
import { usePaginationContext } from '@/app/context/PaginationContext'

export default function TransactionFooter() {
  const {goToNext, goToPrevious, currentPage, totalPages, getPageNumbers, setCurrentPage} = usePaginationContext();

  return (
    <div className={styles.transactionFooter}>

      <button className={styles.prevPage} onClick={goToPrevious} disabled={currentPage === 1}>
        <Image src="assets/images/icon-caret-left.svg" alt="Prev" width={10} height={10} className={styles.prevLinkImage} />
        <p> Prev </p>
      </button>

      <div className={styles.pagination}>
        {getPageNumbers().map(page => (
          <div 
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage? `${styles.active}` : `${styles.page}`}
          >
            {page}
          </div>
        ))}
      </div>

      <button 
        className={styles.nextPage} 
        onClick={goToNext}
        disabled= {currentPage === totalPages}
      >
        <p> Next </p>
        <Image src="assets/images/icon-caret-right.svg" alt="Next" width={10} height={10} className={styles.nextLinkImage} />
      </button>
    </div>
  )
}
