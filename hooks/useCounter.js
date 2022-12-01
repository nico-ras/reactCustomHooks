import { useState } from "react"

/*Aqui iria la logica de negocio */
/*Valor de incremento y decremento opcional, con 1 como numero por defecto */

export const useCounter = ( initialValue = 10 ) => {
    
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        /*if (counter >= 20) return;*/
        setCounter( (current) =>  current + value  );
        //setCounter( counter + value );
    }

    const decrement = (value = 1) => {
        setCounter( (current) =>  current - value  );
        //setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }
    
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}