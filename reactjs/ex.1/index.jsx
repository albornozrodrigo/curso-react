import React from 'react'
import ReactDOM from 'react-dom'
//import { Primeiro, Segundo } from './component'
//import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'
import ClassComponent from './classComponent'
import Field from './field'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
	field: fieldReducer
})

//ReactDOM.render(<div><Primeiro/><Segundo/></div>, document.getElementById('app'))

ReactDOM.render(<Provider store={createStore(reducers)}><Field initialValue="Teste" /></Provider>, document.getElementById('app'))