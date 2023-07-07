import Menu from 'components/Botao/Menu/Menu'
import Footer from 'components/Footer/Footer'
import PaginaLayout from 'components/PaginaLayout/PaginaLayout'
import Cardapio from 'pages/Cardapio/Cardapio'
import Inicio from 'pages/Inicio/Inicio'
import NotFound from 'pages/NotFound/NotFound'
import Prato from 'pages/Prato/Prato'
import Sobre from 'pages/Sobre/Sobre'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
	return (
		<main className='container'>
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
						<Route
							path='sobre'
							element={<Sobre />}
						/>
            <Route
              path='prato/:id'
              element={<Prato />}
            />
					</Route>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	)
}

export default Router
