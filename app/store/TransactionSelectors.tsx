import { RootState } from "./store"
import { createSelector } from "@reduxjs/toolkit"

export const selectTransactions = (state: RootState) => state.transactions.transactions
export const selectSelectedCategory = (state: RootState) => state.transactions.selectedCategory
export const selectSearchQuery = (state: RootState) => state.transactions.searchQuery

export const filteredTransactions = createSelector(
  [selectTransactions, selectSelectedCategory, selectSearchQuery],
  (transactions, category, query) => {
    if ((category === "all" || !category) && !query.trim()) return transactions;

    return transactions.filter(transaction => {
        const matchesCategory = (category === "all" || !category) ? true : transaction.category === category
        const matchesSearch = query.trim() ? transaction.itemBought.toLowerCase().includes(query.toLowerCase()) : true

        return matchesCategory && matchesSearch
      }
    )
  }
)
