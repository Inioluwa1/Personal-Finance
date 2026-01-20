import  { createSlice } from "@reduxjs/toolkit"
import { TransactionState } from "@/app/Interface"

const initialState: TransactionState = {
  transactions: [
    { 
      id: 0,
      date: "2023-06-01", 
      itemBought: "Groceries", 
      price: 50, 
      category: "Food" 
    },
    { 
      id: 4,
      date: "2023-06-01", 
      itemBought: "Groceries2", 
      price: 50, 
      category: "Transportation" 
    },
    { 
      id: 1,
      date: "2023-06-01", 
      itemBought: "Groceries3", 
      price: 50, 
      category: "Entertainment" 
    },
    { 
      id: 2,
      date: "2023-06-01", 
      itemBought: "Groceries4", 
      price: 50, 
      category: "Utilities" 
    },
    { 
      id: 3,
      date: "2023-06-01", 
      itemBought: "Groceries5", 
      price: 50, 
      category: "Others" 
    },
  ],
}

const TransactionSlice = createSlice({
  name: "transaction",
  initialState, 
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload)
    }, 
    editTransaction: () => {

    },
    deleteTransaction: () => {

    }
  }
})

export const { addTransaction, editTransaction, deleteTransaction } = TransactionSlice.actions
export default TransactionSlice.reducer