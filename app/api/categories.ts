export const getCategories = async () => {
  const response = await fetch("")

  if(!response.ok){
    throw new Error("Failed to get categories")
  }
  
  const data = await response.json()
  return data;
}

export const createCategory = async (data: {
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

export const retrieveCategory = async () => {
  const response = await fetch ("")

  if(!response.ok){
    throw new Error("Failed to retrieve data")
  }

  const data = await response.json()
  return data
}

import { CategoryAPI } from "../Interface";
export const updateCategory = async (id: string, updatedData:CategoryAPI) => {
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

export const deleteCategory = async (id:string) => {
  const response = await fetch(`${id}`, {
    method: "DELETE",
  })

  if (!response.ok) throw new Error("Delete failed")

  return response.json()
}
