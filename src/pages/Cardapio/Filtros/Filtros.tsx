import styles from './Filtros.module.scss'
import filtros from './filtros.json'

interface IFiltro {
  label: string,
  id: number
}

function Filtros() {
  function selecionaFiltro(filtro: IFiltro){

  }

  return (
    <div className={styles.filtros}>
      {filtros.map((filtro) => (
        <button className={styles.filtros__filtro} 
          key={filtro.id} 
          // onClick={selecionaFiltro(filtro)}
        >
          {filtro.label}
        </button>
      ))}
    </div>
  )
}

export default Filtros