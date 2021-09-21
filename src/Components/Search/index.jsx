import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { Context } from '../../Context/Context'
import { useHistory } from 'react-router';
import styles from './style.module.scss'
const Search = () => {

  const [inputUser, setInputUser] = useState('')
  const [inputErro, setInputErro] = useState(false)

  const history = useHistory()
  const { getUser, error} = React.useContext(Context);

  const search = async () => {

    if (inputUser.trim().length === 0) {
      setInputErro(true)
      return
    }
    setInputUser('')
    await getUser(inputUser, history)

  }

  const handleInput = (target) => {
    setInputUser(target.value)
    if (inputErro)
      setInputErro(false)
  }



  return (
    <div className="d-flex align-items-center flex-column">
      <div className="input-group">
        <input type="text"
          value={inputUser}
          className="form-control"
          placeholder="nome do usuario"
          onChange={({ target }) => handleInput(target)}
          onKeyDown={(e) => e.key === 'Enter' ? getUser() : null}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={() => search()} type="button" id="button-addon2">
            <BiSearch />
          </button>
        </div>
      </div>
      {inputErro && <span className={styles.erro}>Digite um nome de usuario</span>}
      {error && <span className={styles.erro}>Falha ao pesquisar usuario</span>}
    </div>
  )
}

export default Search
