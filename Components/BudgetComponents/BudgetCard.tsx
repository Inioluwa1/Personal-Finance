import React from 'react'
import styles from "./BudgetComponent.module.css"
import {useUIContext} from "@/app/context/UIContext"
import { FaEllipsis } from "react-icons/fa6";

export default function BudgetCard() {
  const {editTray, openEditTray, closeEditTray, openEditBudget} = useUIContext();

  const handleToggle = () => {
    openEditBudget(),
    closeEditTray()
  }
  return (
    <div className={styles.BudgetCardContainer}>
      <div className={styles.Entertainment}>
        <div className={styles.EntertainmentTitle}>
          <span className={styles.Dot}> </span>
          <h3> Entertainment </h3>
        </div>
          <FaEllipsis onClick={openEditTray} className={styles.ellipsis}/>
        {editTray && 
          <div className={styles.ellipsisDropDown}> 
            <p className={styles.edit} onClick={handleToggle}> Edit </p>
            <p className={styles.delete}> Delete </p>
          </div>
        }
      </div>
      <div>
        <p> Maximum of $50.00</p>
        <div className={styles.ProgressBar}>
          <div className={styles.ProgressBarFill} style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className={styles.SpentnRemaining}> 
        <div className={styles.Spent}>
          <p> Spent </p>
          <h4> $15.00 </h4>
        </div>
        <div className={styles.Remaining}>
          <p> Remaining </p>
          <h4> $35.00 </h4>
        </div>
      </div>
    </div>
  )
}
