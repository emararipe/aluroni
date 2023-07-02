import Item from './Item/Item'
import itens from './itens.json'
import styles from './Itens.module.scss'

function Itens() {
  return (
    <div className={styles.itens}>
      {itens.map((item) => (
        <Item key={item.id}/>
      ))}
    </div>
  )
}

export default Itens