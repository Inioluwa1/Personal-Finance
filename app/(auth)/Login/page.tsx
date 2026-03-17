"use client"

import React, {useState} from 'react'
import Link from "next/link"
import styles from "./Login.module.css"
import { useRouter } from "next/navigation"
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useAuthContext } from '@/app/context/AuthContext'


export default function LoginPage() {
  const router = useRouter()
  const {loginDetails, handleLoginChange, login, clearLoginDetails} = useAuthContext()
  const [showPassword, setShowPassword] = useState(false)
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login()
    router.push("/Dashboard")
    clearLoginDetails();
  } 

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  const setDisabled:boolean = !(loginDetails.email && loginDetails.password)

  return (
    <div className={styles.LoginPageContainer}>
      <h1> Login </h1>
      <form className={styles.LoginForm} onSubmit={handleLogin}>
        <label> Email </label>
        <input 
          name="email"
          type="email" 
          value={loginDetails.email}
          required 
          className={styles.emailInput}
          onChange={handleLoginChange}
        />
        <label> Password </label>
        <div className={styles.PasswordInput}>
          <input 
            name="password"
            type={showPassword ? "text" : "password"} 
            value={loginDetails.password}
            required 
            className={styles.passwordInput}
            onChange={handleLoginChange}
          />
          {showPassword ? 
            <IoIosEyeOff onClick={showPasswordHandler} className={styles.passwordIcon} /> : 
            <IoIosEye onClick={showPasswordHandler} className={styles.passwordIcon} />}
        </div>
        <button
          className={`${setDisabled? styles.disabled : styles.LoginFormButton }`}
          disabled={setDisabled}
        > 
          Login 
        </button>
      </form>
      <span className={styles.SignupLink}> 
        <p> Need to create an account? </p>
        <Link href="/Signup"> Sign Up </Link>
      </span>
    </div>
  )
}
