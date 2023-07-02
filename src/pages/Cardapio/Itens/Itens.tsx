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

  function ordenarCrescente (
    lista: typeof itens,
    propriedade: 'size' | 'serving' | 'price'
  ) {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  }

  function ordenarLista(lista: typeof itens){
    switch(ordenador){
      case 'porcao':
        return ordenarCrescente(lista, 'size')
      case 'qtd_pessoas':
        return ordenarCrescente(lista, 'serving')
      case 'preco':
        return ordenarCrescente(lista, 'price')
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