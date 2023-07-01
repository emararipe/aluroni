import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import styles from './Ordenador.module.scss'
import opcoes from './ordenador.json'
import classNames from 'classnames'

function Ordenador() {
  const [aberto, setAberto] = useState(false)
  return (
    <button
      className={styles.ordenador}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>Ordenar por:</span>
      {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: aberto
        })}
      >
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__option}
            key={opcao.value}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Ordenador