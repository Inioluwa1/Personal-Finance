"use client"

import React from 'react'
import styles from './Budget.module.css'
import BudgetCard from "@/Components/BudgetComponents/BudgetCard"
import AddBudget from "@/Components/BudgetComponents/AddBudget"
import EditBudget from '@/Components/BudgetComponents/EditBudget';
import { useUIContext } from '@/app/context/UIContext';

export default function BudgetPage() {
  const {addNew, openAddNewBudget, editBudget} = useUIContext();

  return (
    <div className={styles.budgetContainer}>
      <div className={`${styles.budgetMainSection} ${addNew || editBudget? styles.overlay : ""}`}>
        <div className={styles.budgetHeader} >
          <h1> Budgets </h1>
          <button className={styles.button} onClick={openAddNewBudget}> + Add New Budget </button>
        </div>
        <div className={styles.budgetCard}>
          <BudgetCard />
          <BudgetCard />
          <BudgetCard />
        </div>
      </div>
      {addNew && 
      <div className={styles.addBudgetSection}>
        <AddBudget />
      </div>}
      {editBudget && 
      <div className={styles.addBudgetSection}>
        <EditBudget />
      </div>}
    </div>
  )
}
