import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import AppHeader from './components/app-header/app-header'



import App from './components/app/app'
ReactDOM.render(
	<Provider store={ store }>
		<AppHeader />
		<App />
	</Provider>,
	document.getElementById('root')
)
