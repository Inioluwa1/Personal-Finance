"use client" 

import { createContext, useContext, useState, ReactNode } from "react"
import { SignUpDetails, LoginDetails, AuthContextType } from "@/app/Interface"

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}:{children: ReactNode}) => {
  const [isLoggedin, setIsLoggedIn] = useState<boolean>(false);
  const initialSignUpDetails: SignUpDetails = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>(initialSignUpDetails)
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  })

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setSignUpDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginDetails(prev => ({
      ...prev,
      [name] : value
    }))
  }

  const clearSignUpDetails = () => {
    setSignUpDetails(initialSignUpDetails)
  }

  const clearLoginDetails = () => {
    setLoginDetails({
      email: "",
      password: ""
    })
  }

  const login = () => {
    document.cookie = "token=fake-token; path=/"
    setIsLoggedIn(true)
  }

  const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    setIsLoggedIn(false)
  }

  return(
    <AuthContext.Provider
    value={{
      signUpDetails,
      loginDetails,
      handleSignUpChange,
      handleLoginChange,
      clearSignUpDetails,
      clearLoginDetails,
      isLoggedin,
      login,
      logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if(context === undefined){
    throw new Error("useAuthContext must be used with a AuthProvider")
  }
  return context;
}