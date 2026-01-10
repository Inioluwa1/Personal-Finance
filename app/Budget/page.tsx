"use client"
import React from 'react'
import styles from './Budget.module.css'
import BudgetCard from "@/Components/BudgetComponents/BudgetCard"
import AddBudget from "@/Components/BudgetComponents/AddBudget"
import { useUIContext } from '@/app/context/UIContext';

export default function BudgetPage() {
  const {openAddNew, openAddNewBudget} = useUIContext();

  return (
    <div>
      <div className={styles.BudgetHeader} >
        <h1> Budgets </h1>
        <button className={styles.Button} onClick={openAddNewBudget}> + Add New Budget </button>
      </div>
      <div className={styles.BudgetCard}>
        <BudgetCard />
        <BudgetCard />
        <BudgetCard />
      </div>
      {openAddNew && 
      <div className={styles.AddBudgetSection}>
        <AddBudget />
      </div>}
    </div>
  )
}
