import { useState, useEffect } from 'react'
import Item from './Item/Item'
import itens from './itens.json'
import styles from './Itens.module.scss'

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

function Itens({ busca, filtro, ordenador }: Props) {
  const [lista, setLista] = useState(itens)

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id
    return true
  }

  function ordenarLista(lista: typeof itens){
    switch(ordenador){
      case 'porcao':
        return lista.sort((a, b) => a.size > b.size ? 1 : -1 )
      case 'qtd_pessoas':
        return lista.sort((a, b) => a.serving > b.serving ? 1 : -1 )
      case 'preco':
        return lista.sort((a, b) => a.price > b.price ? 1 : -1 )
      default: 
        return lista
    }
  }

  useEffect(() => {
    const novaLista = itens.filter((item) => (
      testaBusca(item.title) &&
      testaFiltro(item.category.id)
    ))
    setLista(ordenarLista(novaLista))
  }, [busca, filtro, ordenador])


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