import React from 'react'
import ReactDOM from 'react-dom/client'
import Cardapio from './pages/Cardapio/Cardapio'
import 'normalize.css'
import './index.css'
import Inicio from 'pages/Inicio/Inicio'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<Inicio />
	</React.StrictMode>
)
