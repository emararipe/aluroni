import classNames from 'classnames'
import styles from './Item.module.scss'
import itens from 'components/itens.json'

type Props = typeof itens[0]

function Item(props: Props) {
	const { ...itens } = props
	return (
		<div className={styles.item}>
			<div className={styles.item__imagem} >
				<img src={itens.photo} alt='completar' />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{itens.title}</h2>
					<p>{itens.description}</p>
				</div>
				<div className={styles.item__tags}>
					<div 
						className={classNames(
							styles.item__tipo,
							styles[`item__tipo__${itens.category.label.toLowerCase()}`]
						)}
					>
						{itens.category.label}
					</div>
					<div className={styles.item__porcao}> {itens.size}g </div>
					<div className={styles.item__qtdpessoas}> {itens.serving} </div>
					<div className={styles.item__valor}> R${itens.price.toFixed(2)} </div> {/* formatação preço item */}
				</div>
			</div>
		</div>
	)

}

export default Item