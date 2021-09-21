import React from 'react'
import styles from './style.module.scss'

const Button = ({ icon, active, ...props }) => {
  return (
    <button className={`${styles.button} ${active ? styles.active : ''}`} onClick={props.setListView}>
      {icon && icon}
      <span>
        {props.children}
      </span>

    </button>
  )
}

export default Button
