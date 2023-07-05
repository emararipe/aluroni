import itens from 'data/cardapio.json'
import styles from './Inicio.module.scss'

function Inicio() {
  let pratosRecomendados = [...itens]
  pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3)
  return (
    <section>
      <h3 className={styles.titulo}>
        Recomendações da Cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((prato) => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <div>
              <button className={styles.recomendado__botao}>
                Ver mais...
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Inicio