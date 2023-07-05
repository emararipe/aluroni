import Menu from 'components/Botao/Menu/Menu'
import Cardapio from 'pages/Cardapio/Cardapio'
import Inicio from 'pages/Inicio/Inicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route
					path='/'
					element={<Inicio />}
				/>
				<Route
					path='/cardapio'
					element={<Cardapio />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
