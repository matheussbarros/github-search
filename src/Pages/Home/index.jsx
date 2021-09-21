import React from 'react'
import Search from '../../Components/Search';
import { VscGithubInverted } from "react-icons/vsc";

import styles from './style.module.scss'



const Home = () => {
  return (
    <div className="container  d-flex flex-column align-items-center justify-content-center p-5 mt-5">
      <div className="row">
        <div className="col-sm">
          <div className={styles.title}>
            <VscGithubInverted /> <h1>Github Search</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Search></Search>
        </div>
      </div>
    </div>

  )
}

export default Home
