import React from "react"
import { render } from 'react-dom'
import ConfigContextProvider from './utils/configContext'
import App from './app'

render(
	<ConfigContextProvider>
		<App />
	</ConfigContextProvider>,
	document.getElementById('app')
)