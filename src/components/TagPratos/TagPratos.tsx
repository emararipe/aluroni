import classNames from 'classnames'
import { Prato } from 'types/Pratos'
import styles from './TagPratos.module.scss'

function TagPratos({ category, size, serving, price }: Prato) { 
  return (
    <div className={styles.tags}>
      <div
        className={classNames(
          styles.tipo,
          styles[`tipo__${category.label.toLowerCase()}`]
        )}
      >
        {category.label}
      </div>
      <div className={styles.porcao}> {size}g </div>
      <div className={styles.qtdpessoas}> 
        Serve {serving} pessoa {serving == 1 ? '' : 's'} 
      </div>
      <div className={styles.valor}> R${price.toFixed(2)} </div>
    </div>
  )
}

export default TagPratos