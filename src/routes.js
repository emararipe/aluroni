import Menu from 'components/Botao/Menu/Menu'
import PaginaLayout from 'components/PaginaLayout/PaginaLayout'
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
					element={<PaginaLayout />}
				>
					<Route
						index
						element={<Inicio />}
					/>
					<Route
						path='cardapio'
						element={<Cardapio />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
