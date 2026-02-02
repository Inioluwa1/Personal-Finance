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
    { 
      id: 10,
      date: "2023-06-01", 
      itemBought: "Groceries", 
      price: 50, 
      category: "Food" 
    },
    { 
      id: 14,
      date: "2023-06-01", 
      itemBought: "Groceries2", 
      price: 50, 
      category: "Transportation" 
    },
    { 
      id: 11,
      date: "2023-06-01", 
      itemBought: "Groceries3", 
      price: 50, 
      category: "Entertainment" 
    },
    { 
      id: 12,
      date: "2023-06-01", 
      itemBought: "Groceries4", 
      price: 50, 
      category: "Utilities" 
    },
    { 
      id: 13,
      date: "2023-06-01", 
      itemBought: "Groceries5", 
      price: 50, 
      category: "Others" 
    },
    { 
      id: 20,
      date: "2023-06-01", 
      itemBought: "Groceries", 
      price: 50, 
      category: "Food" 
    },
    { 
      id: 24,
      date: "2023-06-01", 
      itemBought: "Groceries2", 
      price: 50, 
      category: "Transportation" 
    },
    { 
      id: 21,
      date: "2023-06-01", 
      itemBought: "Groceries3", 
      price: 50, 
      category: "Entertainment" 
    },
    { 
      id: 22,
      date: "2023-06-01", 
      itemBought: "Groceries4", 
      price: 50, 
      category: "Utilities" 
    },
    { 
      id: 23,
      date: "2023-06-01", 
      itemBought: "Groceries5", 
      price: 50, 
      category: "Others" 
    },
    { 
      id: 30,
      date: "2023-06-01", 
      itemBought: "Groceries", 
      price: 50, 
      category: "Food" 
    },
    { 
      id: 34,
      date: "2023-06-01", 
      itemBought: "Groceries2", 
      price: 50, 
      category: "Transportation" 
    },
    { 
      id: 31,
      date: "2023-06-01", 
      itemBought: "Groceries3", 
      price: 50, 
      category: "Entertainment" 
    },
    { 
      id: 32,
      date: "2023-06-01", 
      itemBought: "Groceries4", 
      price: 50, 
      category: "Utilities" 
    },
    { 
      id: 33,
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
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload)
    },
    sortbyFoodCategory: (state, action) => {
      state.transactions = state.transactions.filter(transaction => transaction.category === "Food")
    }
  }
})

export const { addTransaction, editTransaction, deleteTransaction, sortbyFoodCategory } = TransactionSlice.actions
export default TransactionSlice.reducer