import React from 'react'
import styles from './style.module.scss'
import { Context } from '../../Context/Context'


const InfoProfile = () => {

  const { user } = React.useContext(Context);
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={user.avatar_url} alt="" />
      </div>
      <div className={styles.infos}>
        <div className={styles.infos_names}>
          <h1>
            {user.name}
          </h1>
          <span>
            {user.login}
          </span>
        </div>

      </div>


    </div>
  )
}

export default InfoProfile
