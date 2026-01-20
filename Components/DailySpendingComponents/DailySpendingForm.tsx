"use client"

import React, {useState} from 'react'
import styles from './DailySpending.module.css'
import { DailySpendingFormProps } from '@/app/Interface'
import { addTransaction } from '@/app/store/TransactionSlice'
import { useDispatch } from 'react-redux'

export default function DailySpendingForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<DailySpendingFormProps>({
    id:"",
    date: "",
    itemBought: "",
    price: "",
    category: "",
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEntry = {
      ...formData,
      price: Number(formData.price),
      id: Math.random()
    }

    dispatch(addTransaction(newEntry));
    console.log(newEntry);
    setFormData({
      id:"",
      date: "",
      itemBought: "",
      price: "",
      category: "",
    })
  }

  return (
    <form className={styles.FormContainer}>
      <div className={styles.Form}>
        <div>
          <label className={styles.label}> Date: </label>
          <input 
            type="date" 
            required 
            name="date"
            value={formData.date} 
            onChange={handleChange} 
            className={styles.Input}
          />
        </div>
        <div>
          <label className={styles.label}> Item bought: </label>
          <input 
            type="text" 
            required 
            name="itemBought" 
            value={formData.itemBought}
            onChange={handleChange} 
            className={styles.Input}
          />
        </div>
        <div>
          <label className={styles.label}> Price: </label>
          <input 
            type="number" 
            required 
            name="price" 
            value={formData.price}
            onChange={handleChange} 
            className={styles.Input}
          />
        </div>
        <div>
          <label> Category: </label>
          <select 
            required 
            name="category" 
            onChange={handleChange} 
            className={styles.Input}
            value={formData.category}
          >
            <option value="" hidden disabled> Select an option </option>
            <option value="food"> Food </option>
            <option value="transportation"> Transportation </option>
            <option value="entertainment"> Entertainment </option>
            <option value="utilities"> Utilities </option>
            <option value="others"> Others </option>
          </select>
        </div>
      </div>
      { 
      formData.date && formData.itemBought && formData.price && formData.category
        && 
      <button className={styles.Button} onClick={handleSubmit}> Add </button>
      }
    </form>
  )
}
