"use client"

import { Provider } from 'react-redux';
import { store } from './store/store';
import { UIProvider } from './context/UIContext'
import { PaginationProvider } from './context/PaginationContext';

export default function Providers({children} : {children: React.ReactNode}) {
  return (
    <Provider store={store}>
      <UIProvider>
        <PaginationProvider>
          {children}
        </PaginationProvider>
      </UIProvider>
    </Provider>
  )
}