import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';


const init = ()=> {
    return JSON.parse( localStorage.getItem('todos') ) || []; //Aqui tomamos lo que quedo en el LS. si esta vacio (nulo) devolvemos []
  }

export const useTodo = (initialState = []) => {




    const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init); //init  entrega lo que esta en el LS


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || []); //En localStorage solo se pueden guardar strings, no objetos
      }, [todos])



    const handleNewTodo = (  todo  ) => {
        //console.log(todo);
        const action = {
          type: '[TODO] Add Todo',
          payload: todo,
        }
    
        dispatchTodos( action );
      }
    
      const handleDeleteTodo = ( id ) => {
        const action = {
          type: '[TODO] Remove Todo',
          payload: id,
        }
        dispatchTodos( action );
      }
    
      const handleToggleTodo = (id) => {
        //console.log(id)
        const action = {
          type: '[TODO] Toggle Todo',
          payload: id,
        }
        dispatchTodos( action );
      }

      const todosCount = todos.length; 

      const pendingTodosCount = todos.filter( todo => !todo.done ).length;

  return {
    ...todos,
    todos,
    todosCount, 
    pendingTodosCount, 
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
