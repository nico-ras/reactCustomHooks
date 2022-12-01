import React, { useEffect, useState } from "react";

export const useFetch = (url) => {

    
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
 })

  const getFetch = async () => {

    setState({ //para volver el loading a true para que al hacer la peticion aparezca como 'loading..'
        ...state,
        isLoasding: true,
    })

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
        data,
        isLoading: false,
        hasError: null,
    })
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return { 
    data: state.data,
    isLoading: state.isLoading, 
    hasError: state.hasError 
   }; //redundante para mayor legibilidad
};
