import { RootState } from "./store"
import { createSelector } from "@reduxjs/toolkit"

export const selectTransactions = (state: RootState) => state.transactions.transactions
export const selectSelectedCategory = (state: RootState) => state.transactions.selectedCategory
export const selectSearchQuery = (state: RootState) => state.transactions.searchQuery
export const selectSortOption = (state: RootState) => state.transactions.sortOption

export const filteredTransactions = createSelector(
  [selectTransactions, selectSelectedCategory, selectSearchQuery, selectSortOption], 
  (transactions, category, query, sortOption) => {
    let filtered = category === "all"? transactions : transactions.filter(transaction => transaction.category === category)

  if(query.trim() !== "") {
    filtered = filtered.filter(transaction => transaction.itemBought.toLowerCase().includes(query.toLowerCase()))
  }

  const sorted = [...filtered]
  switch(sortOption) {
    case "a-z":
      sorted.sort((a,b) => a.itemBought.localeCompare(b.itemBought));
      break;

    case "z-a":
      sorted.sort((a,b) => b.itemBought.localeCompare(a.itemBought));
      break;

    case "highest":
      sorted.sort((a,b) => b.price - a.price);
      break;

    case "lowest":
      sorted.sort((a,b) => a.price - b.price);
      break;
    
    case "latest":
      sorted.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      break;

    case "oldest":
      sorted.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      break;
  }
  return sorted
  
  })