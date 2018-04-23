'use sctrict'

import App from './app'
import React from 'react'
//import ReactDOM from 'react-dom'


import { render } from 'react-dom'


//shorthand
import { sum } from './sum'

import { AppContainer } from 'react-hot-loader'

//var React = require('react')
//var ReactDOM = require('react-dom')
//var Title = require('./app')

const renderApp = (NextApp) => {
	render(
		<AppContainer>
			<NextApp />
		</AppContainer>,
		document.querySelector('[data-js="app"]')
	)
}


/*render(
	<AppContainer>
		<App />
	</AppContainer>,
	//React.createElement(Title),
	//<Title />,
	document.querySelector('[data-js="app"]')
)* substituindo*/
renderApp(App)


//verifica se está habilitado o hot
//sempre que for alterado faz o require novamente
// .default - o babel sempre coloca o default.
if(module.hot) {
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default
		renderApp(NextApp)
	})
}

/*sum(
	React.createElement(sum),
	document.querySelector('[data-sum="teste"]')
)*/