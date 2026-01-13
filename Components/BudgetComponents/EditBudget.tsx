import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import styles from "./BudgetComponent.module.css"
import ThemeButton from './ThemeButton';
import { useUIContext } from '@/app/context/UIContext';

export default function EditBudget() {
  const {closeEditBudget} = useUIContext();

  return (
    <div className={styles.AddBudgetContainer}>
      <div className={styles.AddBudgetHeader}>
        <h1> Edit Budget </h1>
        <MdOutlineCancel size={35} className={styles.CloseIcon} onClick={closeEditBudget}/>
      </div>
      <p className={styles.Category}> Choose a category to set a spending budget. These categories can help you monitor spending. </p>
      <form className={styles.AddBudgetForm}>
        <div className={styles.BudgetCategory}>
          <label> Budget Category </label>
          <select>
            <option value="food"> Food </option>
            <option value="transportation"> Transportation </option>
            <option value="entertainment"> Entertainment </option>
            <option value="utilities"> Utilities </option>
            <option value="others"> Others </option>
          </select>
        </div>
        <div className={styles.MaximumSpend}>
          <label> Maximum Spend </label>
          <div className={styles.MaximumSpendInput} > 
            $ <input type="number" placeholder="Enter amount"/>
          </div>
        </div>
        <div className={styles.Theme}>
          <label> Theme </label>
          <ThemeButton />
        </div>
        <button className={styles.AddBudgetButton}> Add Budget </button>
      </form>

    </div>
  )
}
