"use client"

import {createContext, useContext, useState, ReactNode} from "react"
import { UIContextType } from "../Interface";

const UIContext = createContext<UIContextType | undefined >(undefined);

export const UIProvider = ({children}: {children: ReactNode}) => {
  const [addNew, setAddNew] = useState<boolean>(false)
  const [editTray, setEditTray] = useState<boolean>(false)
  const [editBudget, setEditBudget] = useState<boolean>(false)
  const [menuTray, setMenuTray] = useState<boolean>(true)

  const openAddNewBudget = () => setAddNew(true);
  const closeAddNewBudget = () => setAddNew(false);
  const openEditBudget = () => setEditBudget(true);
  const closeEditBudget = () => setEditBudget(false);
  const openEditTray = () => setEditTray(true);
  const closeEditTray = () => setEditTray(false);
  const openMenuTray = () => setMenuTray(true)
  const closeMenuTray = () => setMenuTray(false)
  

  return (
    <UIContext.Provider
    value={{
      addNew, openAddNewBudget, closeAddNewBudget,
      editTray, openEditTray, closeEditTray,
      editBudget, openEditBudget, closeEditBudget,
      menuTray, openMenuTray, closeMenuTray,
    }}>
      {children }
    </UIContext.Provider>
  )
}

export const useUIContext = ():UIContextType => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUIContext must be used within a UIProvider");
  }
  return context;
}