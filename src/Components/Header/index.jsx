import React from 'react'
import Search from '../../Components/Search';
import styles from './style.module.scss'

const Header = () => {
  return (
    <header className={`${styles.header}  d-flex align-items-center` }>
      <div className={styles.search}>
        <Search />
      </div>
    </header>
  )
}

export default Header
