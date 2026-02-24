"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { SignUpDetails, LoginDetails, AuthContextType } from "@/app/Interface"
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}:{children: ReactNode}) => {
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
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
  return(
    <AuthContext.Provider
    value={{
      signUpDetails,
      loginDetails,
      handleSignUpChange,
      handleLoginChange,
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