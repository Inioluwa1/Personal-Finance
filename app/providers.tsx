"use client"

import "./globals.css"
import { Provider } from 'react-redux';
import { store } from './store/store';
import { UIProvider } from './context/UIContext'
import { PaginationProvider } from './context/PaginationContext';
import Sidebar from '@/Components/Sidebar';
import MobileSidebar from '@/Components/MobileSidebar';


export default function Providers({children} : {children: React.ReactNode}) {
  
  return (
    <Provider store={store}>
      <UIProvider>
        <div className="ApplicationContainer">
          <Sidebar />
          <PaginationProvider>
            <div className="ContentContainer">
              {children}
            </div>
          </PaginationProvider>
        </div>
      </UIProvider>
    </Provider>
  )
}