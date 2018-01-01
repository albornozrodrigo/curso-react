import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
	constructor(props) {
		super(props)
		this.keyHandler = this.keyHandler.bind(this)
	}

	keyHandler(e) {
		const { add, search, description, clear } = this.props
		if(e.key === 'Enter') {
			e.shiftKey ? search() : add(description)
		}
		else if(e.key === 'Escape') {
			clear()
		}
	}

	componentWillMount() {
		this.props.search()
	}

	render() {
		const { add, search, clear, description, changeDescription } = this.props
		return (
			<div role="form" className="todo-form">
				<Grid cols="9 9 10 10">
					<input id="description" onChange={changeDescription} onKeyUp={this.keyHandler} className="form-control" placeholder="Adicione uma tarefa" value={description} />
				</Grid>
				<Grid cols="3 3 2 2">
					<IconButton style="primary" icon="plus" onClick={() => add(description)} />
					<IconButton style="info" icon="search" onClick={search} />
					<IconButton style="default" icon="close" onClick={() => clear()} />
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)