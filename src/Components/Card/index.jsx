import React from 'react'
import styles from './style.module.scss'

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <a className={styles.link} href={data.svn_url} target="_blank" rel="noreferrer">
          <h3>{data.name}</h3>
        </a>

      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default Card
