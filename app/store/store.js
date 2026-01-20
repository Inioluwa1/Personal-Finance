import { configureStore } from "@reduxjs/toolkit"
import transactionReducer from "./TransactionSlice"

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  }
})