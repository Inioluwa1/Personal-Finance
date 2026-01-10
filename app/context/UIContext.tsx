"use client"

import {createContext, useContext, useState, ReactNode} from "react"

interface UIContextType{
  openAddNew: boolean;
  setOpenAddNew?: (value: boolean) => void;
  openAddNewBudget: () => void;
  closeAddNewBudget: () => void;
}

const UIContext = createContext<UIContextType | undefined >(undefined);

export const UIProvider = ({children}: {children: ReactNode}) => {
  const [openAddNew, setOpenAddNew] = useState<boolean>(false)

  const openAddNewBudget = () => setOpenAddNew(true);
  const closeAddNewBudget = () => setOpenAddNew(false);

  return (
    <UIContext.Provider
    value={{
      openAddNew,
      openAddNewBudget,
      closeAddNewBudget,
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