import React, { useEffect } from 'react'
import { Context } from '../../Context/Context'
import { useHistory, useParams } from 'react-router';


import Card from '../../Components/Card'
import Header from '../../Components/Header'
import InfoProfile from '../../Components/InfoProfile'
import NavBar from '../../Components/NavBar'
import Loading from '../../Components/Loading'
import styles from './style.module.scss'

const Profile = () => {
  const { getUser, getRepos, getStarred, user, repos, starred, listView, loading } = React.useContext(Context);
  const history = useHistory()
  const { userName } = useParams()


  useEffect(() => {
    getRepos(user.login)
    getStarred(user.login)
  }, [user])


  useEffect(() => {
    if (userName !== undefined) {
      getUser(userName, history)
    }
  }, [userName])

  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-md-block">
              <InfoProfile />
            </div>
            <div className="col-md-9">
              {loading ? <Loading /> :
                <div className={styles.respos}>
                  {listView === 'repos'
                    ? repos.length
                      ?
                      repos.map((repo) => {
                        return (<Card key={repo.id} data={repo} />)
                      })
                      :
                      <p>Este usuario ainda não possui repositorios</p>
                    : starred.length ?
                      starred.map((starred) => {
                        return (<Card key={starred.id} data={starred} />)
                      })
                      :
                      <p>Este usuario ainda não lista de favoritos</p>
                  }
                </div>
              }

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
