"use client"

import { createContext, useContext, useState, ReactNode, useEffect} from "react"
import { PaginationContextType } from "../Interface"
import { useMediaQuery } from "./DesktopSize"
import { useAppSelector } from "../store/hook"
import { filteredTransactions } from "../store/TransactionSelectors"

const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

export const PaginationProvider = ({children} : {children: ReactNode}) => {
  
  const isDesktop = useMediaQuery("(min-width:768px)")
  const transactions = useAppSelector(filteredTransactions) 
  const itemsPerPage = isDesktop? 8 : 5;
  const maxPageButtons = 4;
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = Math.ceil(transactions.length/itemsPerPage)
  const startIndex =(currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex)

  // useEffect(() => {
  //   if(currentPage > totalPages && totalPages > 0){
  //     setCurrentPage(totalPages)
  //   }
  // }, [currentPage, totalPages])

  const goToPrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }
  const goToNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages ))
  }

  const getPageNumbers = () => {
    const half = Math.floor(maxPageButtons/2);

    let start = Math.max(1, currentPage - half)
    let end = start + maxPageButtons - 1;

    if(end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxPageButtons + 1)
    }

    return Array.from(
      {length: end - start + 1},
      (_, i) => start + i
    );
  }

  return (
    <PaginationContext.Provider
    value={{
      goToPrevious, goToNext, getPageNumbers, setCurrentPage,
      currentTransactions, currentPage, totalPages, 
    }}>
      {children}
    </PaginationContext.Provider>
  )
}

export const usePaginationContext = ():PaginationContextType => {
  const context = useContext(PaginationContext);
  if(context === undefined){
    throw new Error("usPaginationContext must be used within a PaginationProvider")
  }
  return context;
}