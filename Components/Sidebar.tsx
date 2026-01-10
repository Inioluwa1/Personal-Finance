"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import styles from "@/assets/styles/Sidebar.module.css"

export default function Sidebar() {
  const pathname = usePathname();

  const SidebarLinks = [
    {
      name: "Overview",
      href: "/",
      icon: "assets/images/icon-nav-overview.svg"
    },
    {
      name: "Daily Spending",
      href: "/DailySpending",
      icon: "assets/images/icon-nav-transactions.svg"
    },
    {
      name: "Budget",
      href: "/Budget",
      icon: "assets/images/icon-nav-budgets.svg"
    },
    {
      name: "Transactions",
      href: "/Transactions",
      icon: "assets/images/icon-nav-transactions.svg"
    },
    {
      name: "Recurring Bills",
      href: "/RecurringBills",
      icon: "assets/images/icon-nav-recurring-bills.svg"
    },
  ]

  return (
    <div className={styles.SideBarContainer} >
      <Image src="assets/images/logo-large.svg" alt="Finance logo" width={100} height={100} className={styles.image} />
      <div className={styles.linkContainer}>
        {SidebarLinks.map((link, index) => {
          const isActive = pathname === link.href ;
        return (
          <span key={index} className={`${styles.links} ${isActive ? styles.chosen : ''}`} >
            <Image src={link.icon} alt={link.name} width={15} height={15} className={styles.linkIcon} />
            <Link href={link.href} className={styles.link}> {link.name} </Link>
          </span>
        )})}
      </div>
      <div className={styles.minimizeMenu} >
        <Image src="assets/images/icon-minimize-menu.svg" alt="Minimize menu" width={15} height={15} />
        <p> MInimize Menu </p>
      </div>
    </div>
  )
}
