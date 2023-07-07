import itens from 'data/cardapio.json'
import styles from './Inicio.module.scss'
import stylesTema from 'styles/Tema.module.scss'
import nossaCasa from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'

function Inicio() {
	const pratosRecomendados = [...itens]
	const selecaoPratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3)
	const navigate = useNavigate()

	function mostrarPratoDetalhado(prato: typeof itens[0]){
		navigate(`/prato/${prato.id}`, {state: {prato}})
	}
	return (
		<section>
			<h3 className={stylesTema.titulo}>
        Recomendações da Cozinha
			</h3>
			<div className={styles.recomendados}>
				{selecaoPratosRecomendados.map((prato) => (
					<div key={prato.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={prato.photo} alt={prato.title} />
						</div>
						<div>
							<button 
								className={styles.recomendado__botao}
								onClick={() => mostrarPratoDetalhado(prato)}
							>
                Ver mais...
							</button>
						</div>
					</div>
				))}
			</div>
			<h3 className={stylesTema.titulo}> Nossa casa </h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Casa do aluroni" />
				<div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
				</div>
			</div>
		</section>
	)
}

export default Inicio