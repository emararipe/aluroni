import React from 'react'
import styles from './Item.module.scss'
import logo from 'assets/logo.svg'


function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem} >
        <img src={logo} alt="completar" />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>Massa</h2>
          <p>Descrição do prato</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}> Massa </div>
          <div className={styles.item__porcao}> 400g </div>
          <div className={styles.item__qtdpessoas}> 2 </div>
          <div className={styles.item__valor}> R$ 70,00 </div>
        </div>
      </div>
    </div>
  )
  
}

export default Item