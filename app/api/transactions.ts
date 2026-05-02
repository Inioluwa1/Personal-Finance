export const getTransactions = async () => {
  const response = await fetch("")

  if(!response.ok){
    throw new Error("Failed to get transactions")
  }
  
  const data = await response.json()
  return data;
}

export const createTransaction = async (data: {
  id: number
}) => {
  const response = await fetch ("", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data)
  })

  return response.json()
}

export const retrieveTransaction = async () => {
  const response = await fetch ("")

  if(!response.ok){
    throw new Error("Failed to retrieve data")
  }

  const data = await response.json()
  return data
}

import { Transaction } from "../Interface";
export const updateTransaction = async (id: string, updatedData:Transaction) => {
  const response = await fetch (`${id}`, {
    method: "PATCH",
    headers: {
      "Content-type" : "application/json",
    },
    body: JSON.stringify(updatedData)
  })

  if (!response.ok) throw new Error("Update failed")

  return response.json()
}

export const deleteTransaction = async (id:string) => {
  const response = await fetch(`${id}`, {
    method: "DELETE",
  })

  if (!response.ok) throw new Error("Delete failed")

  return response.json()
}
