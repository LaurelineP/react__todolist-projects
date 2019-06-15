import React, { useState } from 'react'

 const TodoList = () => {
		const [ inputValue, updateInput ] = useState('');
		const [ todolist, updateTodo ] = useState([]);
		const message = `What's next ?`
		const handleTodo = ( e, action ) => {
			const [ CREATE, UPDATE, DELETE ] = [ 'create', 'update', 'delete' ];
			switch ( action.type ) {
				case CREATE :
						if( e.target.value && e.key === 'Enter' ) {
							updateTodo([
								{
									text: inputValue,
									completed: false
								},
								...todolist,

			
							])
							updateInput('')
						}
					break;

				case UPDATE :
					break;

				case DELETE :
					console.log('delet', action)
					break;
				default:;
			}
		}
    return (
        <div className = "todolist-container" >
					<h1 className = "title">
						<span className ="wa">WA</span>
						<span className = "todo">TODO</span>
					</h1>
					<input 
							type ="text"
							value = { inputValue }
							className = "todolist-input"
							placeholder = { message }
							onChange = { e => updateInput( e.target.value ) }
							onKeyPress = { e => handleTodo( e,  { type : "create" }) }
							/>
					<div className = "todolist-list">
						{
							todolist.map( ( todo, idx ) => {
								return (
									<div className = "todo-container" key = { idx } >
										<p className = "todo-element "> { todo.text }</p>
										<span
											className = "todo-close-btn"
											onClick = { e => handleTodo( e, { type : "delete", payload: { index: idx } })}
											/>
									</div>
								)
							})
						}
					</div>
        </div>
    )
    }
export default TodoList;