export const todoReducer = ( initialState = [], action  ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo': // usamos solo el id en el payload { type: ['[TODO] Remove Todo', payload: id }
            return initialState.filter( todo => todo.id !== action.payload );//filtra todos los todos que no tengan el mismo ID que el payload     
//.filter() retorna un nuevo array, por tanto no muta el originial
        
        case '[TODO] Toggle Todo':
            return initialState.map( todo => { // .map() retorna un nuevo array, por lo que no muta el original
                  //payload es el id
                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done,    //Si es true se hace false, si es false se hace true.
                    }            
                } 

                return todo;
            })  

        default:
            return initialState;    
    }

}



/*case 'ABC':
            throw new Error('Action.type = ABC no esta implementada'); */