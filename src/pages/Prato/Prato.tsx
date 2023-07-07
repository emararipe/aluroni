import styles from './Prato.module.scss'
import { useParams } from 'react-router-dom'
import cardapio from 'data/cardapio.json'
import NotFound from 'pages/NotFound/NotFound'
import TagPratos from 'components/TagPratos/TagPratos'

function Prato() {
  const { id } = useParams()
  const prato = cardapio.find(prato => prato.id = Number(id))
  if(!prato){
    return <NotFound />
  }
  
  return (
    <>
      <button className={styles.voltar}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <TagPratos {...prato} />
        </div>
      </section>
    </>
  )
}

export default Prato