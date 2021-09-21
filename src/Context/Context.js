import React, { useState, createContext } from 'react'
import { USER_GET } from '../Api'
export const Context = createContext()

export const AppProvider = ({ children }) => {



  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])
  const [listView, setListView] = useState('repos')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')


  async function getUser(request, history) {
    const { url, options } = USER_GET(request);
    await fetch(url, options)
      .then(async (resp) => {
        const user = await resp.json()
        if (user.message === "Not Found") {
          history.push('/user/not-found')
        } else {
          history.push(`/${user.login}`)
          setUser(user);
        }
        if (error)
          setError(false)
      }).catch(() => {
        setError(true)
      });
  }

  async function getRepos(request) {
    setLoading(true)
    const { url, options } = USER_GET(`${request}/repos`);
    await fetch(url, options)
      .then(async (resp) => {
        const json = await resp.json();
        setRepos(json);
      }).finally(() => {
        setLoading(false)
      });
  }

  async function getStarred(request) {
    const { url, options } = USER_GET(`${request}/starred`);
    const response = await fetch(url, options);
    const json = await response.json();
    setStarred(json);
  }



  return (
    <Context.Provider value={
      {
        user,
        setUser,
        repos,
        setRepos,
        starred,
        setStarred,
        listView,
        setListView,
        error,
        setError,
        loading,
        getUser,
        getRepos,
        getStarred
      }
    }>
      {children}
    </Context.Provider>
  )
}

