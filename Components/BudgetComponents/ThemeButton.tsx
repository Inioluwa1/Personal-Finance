"use client"
import React, {useState} from 'react'
import styles from './BudgetComponent.module.css'

export default function ThemeButton() {
  const colours = [
    { name: "Green", value: "Green", color: "rgb(22, 120, 35)"},
    { name: "Yellow", value: "Yellow", color: "rgb(228, 218, 25)"},
    { name: "Blue", value: "Blue", color: "rgb(36, 25, 229)"},
    { name: "Coral", value: "Coral", color: "rgb(237, 131, 37)"},
    { name: "Black", value: "Black", color: "rgb(11, 11, 11)"},
  ]
  
  const [themeOpen, setThemeOpen] = useState(false);
  const [selected, setSelected] = useState(colours[0]);

  return (
    <div className={styles.selectWrapper}>
      <div className={`${styles.selectButton} ${themeOpen? styles.open : "" }`} onClick={() => setThemeOpen(!open)}> 
        <span className={styles.circle} style={{background: selected.color}} />
        {selected.name}
      </div>

      {themeOpen && (
        <div className={styles.dropDown}> 
          {colours.map(colour => (
            <div
              key={colour.value} 
              className={styles.options}
              onClick={() => {
                setSelected(colour)
                setThemeOpen(false)
              }}
            > 
              <span className={styles.circle} style={{background: colour.color}} />
              {colour.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
