import React from 'react'
import { Context } from '../../Context/Context'


import Button from '../Button'
import styles from './style.module.scss'
import { BiBookBookmark, BiStar } from "react-icons/bi";

const NavBar = () => {

  const { listView, setListView } = React.useContext(Context);

  return (

    <nav className={styles.nav}>
      <div className="container">
        <div className="row">
          <div className="col-3">
          </div>
          <div className="col-9">
            <div className={styles.menu}>
              <Button active={listView === 'repos'} setListView={() => setListView('repos')} icon={<BiBookBookmark />}>Repositories</Button>
              <Button active={listView === 'starred'} setListView={() => setListView('starred')} icon={<BiStar />}>Starred</Button>
            </div>

          </div>
        </div>
      </div>
    </nav>

  )
}

export default NavBar
