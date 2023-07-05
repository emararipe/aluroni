import { Outlet } from 'react-router-dom'
import styles from './PaginaLayout.module.scss'
import stylesTema from 'styles/Tema.module.scss'

function PaginaLayout() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
          A casa do código e da massa
				</div>
			</header>
			<div className={stylesTema.container}>
				<Outlet />
			</div>
		</>
	)
}

export default PaginaLayout

