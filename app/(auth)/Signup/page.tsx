"use client"

import React, { useState } from 'react'
import Link from "next/link"
import styles from "./Signup.module.css"
import { useRouter } from "next/navigation"
import { useAuthContext } from '@/app/context/AuthContext'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function SignupPage() {
  const {signUpDetails, handleSignUpChange} = useAuthContext()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    
  const checkPassword = signUpDetails.confirmPassword !== "" && signUpDetails.password !== signUpDetails.confirmPassword;
  
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(checkPassword) return
    router.push("/")
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }
  
  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }


  return (
    <div className={styles.SignupPageContainer}>
      <h1> Sign Up </h1>
      <form onSubmit={handleSignUp} className={styles.SignupForm}>
        <label> Name </label>
        <input 
          name="name"
          type="text"
          value={signUpDetails.name} 
          required 
          className={styles.nameInput}
          onChange={handleSignUpChange}
        />
        <label> Email </label>
        <input 
          name="email"
          type="email"
          value={signUpDetails.email} 
          required 
          className={styles.emailInput}
          onChange={handleSignUpChange}
        />
        <label> Create Password </label>
        <div className={styles.PasswordInput}>
          <input 
            name="password"
            type={showPassword ? "text" : "password"} 
            value={signUpDetails.password}
            required 
            className={styles.passwordInput}
            onChange={handleSignUpChange}
          />
          {
          showPassword ? 
            <IoIosEyeOff onClick={showPasswordHandler} className={styles.passwordIcon} /> : 
            <IoIosEye onClick={showPasswordHandler} className={styles.passwordIcon} />
          }
        </div>
        <label> Confirm Password </label>
        <div className={styles.PasswordInput}>
          <input 
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"} 
            value={signUpDetails.confirmPassword}
            required 
            className={styles.passwordInput}
            onChange={handleSignUpChange}
          />
          {
          showConfirmPassword ? 
            <IoIosEyeOff onClick={showConfirmPasswordHandler} className={styles.passwordIcon} /> : 
            <IoIosEye onClick={showConfirmPasswordHandler} className={styles.passwordIcon} />
          }
        </div>
        {checkPassword && <p> Passwords do not match </p>}
        <button> Create Account </button>
      </form>
      <span className={styles.LoginLink}> 
        <p> Already have an account? </p>
        <Link href="/"> Login </Link>
      </span>
    </div>
  )
}
