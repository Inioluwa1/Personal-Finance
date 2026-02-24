"use client"

import React, {useState} from 'react'
import Link from "next/link"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/Dashboard")
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={styles.LoginPageContainer}>
      <h1> Login </h1>
      <form className={styles.LoginForm} onSubmit={handleLogin}>
        <label> Email </label>
        <input type="email" required className={styles.emailInput} />
        <label> Password </label>
        <div className={styles.PasswordInput}>
          <input type={showPassword ? "text" : "password"} required className={styles.passwordInput} />
          {showPassword ? 
            <IoIosEyeOff onClick={showPasswordHandler} className={styles.passwordIcon} /> : 
            <IoIosEye onClick={showPasswordHandler} className={styles.passwordIcon} />}
        </div>
        <button> Login </button>
      </form>
      <span className={styles.SignupLink}> 
        <p> Need to create an account? </p>
        <Link href="/Signup"> Sign Up </Link>
      </span>
    </div>
  )
}
