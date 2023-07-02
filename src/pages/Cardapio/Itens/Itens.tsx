import { useState, useEffect } from 'react'
import Item from './Item/Item'
import itens from './itens.json'
import styles from './Itens.module.scss'

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

function Itens(props: Props) {
  const { busca, filtro } = props
  const [lista, setLista] = useState(itens)

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id
    return true
  }

  useEffect(() => {
    const novaLista = itens.filter((item) => (
      testaBusca(item.title) &&
      testaFiltro(item.category.id)
    ))
    setLista(novaLista)
  }, [busca, filtro])


  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

export default Itens