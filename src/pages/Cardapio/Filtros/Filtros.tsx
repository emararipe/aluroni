import styles from './Filtros.module.scss'
import filtros from './filtros.json'
import classNames from 'classnames'

interface IFiltro {
  label: string,
  id: number
}

interface Props {
  filtro: number | null,
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

function Filtros({ filtro, setFiltro }: Props) {
  function selecionaFiltro(opcaoFiltro: IFiltro){
    if(filtro === opcaoFiltro.id)
      return setFiltro(null)
    return setFiltro(opcaoFiltro.id)
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcaoFiltro) => (
        <button className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcaoFiltro.id
          })} 
          key={opcaoFiltro.id} 
          onClick={() => selecionaFiltro(opcaoFiltro)}
        >
          {opcaoFiltro.label}
        </button>
      ))}
    </div>
  )
}

export default Filtros