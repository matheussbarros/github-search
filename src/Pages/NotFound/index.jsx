import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import styles from './style.module.scss'
const NotFound = () => {
  return (
    <div className="container  d-flex  align-items-center flex-column justify-content-center p-5 mt-5">
      <div className="row">
        <div className="col-sm">
          <div className={styles.title}>
            <VscGithubInverted /> <h1>Usuario não encontrado</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
