'use strict'

import React from 'react'

// var React = require('react')

// const nao faz hoisting e torna imutabilidade. Nao deixa reatribuir
const App = React.createClass({
	render: function() {
		//return React.createElement('h1', null, 'T�tulo')
		return <h1>Aplica��o! </h1>
	}
})

// CommonJS
// module.exports = Title

// ES2015
export default App;