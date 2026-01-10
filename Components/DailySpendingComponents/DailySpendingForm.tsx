import React from 'react'
import styles from './DailySpending.module.css'

export default function DailySpendingForm() {
  return (
    <form className={styles.Form}>
      <div>
        <label> Date: </label>
        <input type="date" className={styles.Input}/>
      </div>
      <div>
        <label> Item bought: </label>
        <input type="text" className={styles.Input}/>
      </div>
      <div>
        <label> Price: </label>
        <input type="number" className={styles.Input}/>
      </div>
      <div>
        <label> Category: </label>
        <select className={styles.Input}>
          <option value="food"> Food </option>
          <option value="transportation"> Transportation </option>
          <option value="entertainment"> Entertainment </option>
          <option value="utilities"> Utilities </option>
          <option value="others"> Others </option>
        </select>
      </div>
      <button className={styles.Button}> Add </button>
    </form>
  )
}
