import styles from './NotFound.module.scss'
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'
import classNames from 'classnames'
import stylesTema from 'styles/Tema.module.scss'
import { useNavigate } from 'react-router-dom'

function NotFound() {
	const navigate = useNavigate()
	return (
		<div className={classNames(
			[styles.container],
			[stylesTema.container]
		)}>
			<div className={styles.voltar}>
				<button onClick= {() => navigate(-1)}>
					{'< Voltar'}
				</button>
			</div>
			<NotFoundImage />
		</div>
	)
}

export default NotFound