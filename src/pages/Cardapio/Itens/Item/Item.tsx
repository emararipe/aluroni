import TagPratos from 'components/TagPratos/TagPratos'
import styles from './Item.module.scss'
import { Prato } from 'types/Pratos'
import { useNavigate } from 'react-router-dom'

type Props = Prato

function Item(props: Props) {
	const { ...itens } = props
  const navigate = useNavigate()
	return (
		<div className={styles.item} onClick={() => navigate(`/prato/${itens.id}`)}>
			<div className={styles.item__imagem} >
				<img src={itens.photo} alt='completar' />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{itens.title}</h2>
					<p>{itens.description}</p>
				</div>
			</div>
      <TagPratos {...itens} />
		</div>
	)
}

export default Item