import React, { createContext, useReducer, useEffect } from 'react';
import { getProdutos } from './dao';

const ProdContext = createContext({});

const initialState = { produtos: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'att':
            return { produtos: action.payload };
        default:
            return state;
    }
};

export function ProviderAtt(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Busca os produtos quando o contexto é inicializado
    useEffect(() => {
        getProdutos().then((produtos) => dispatch({ type: 'att' , payload:produtos}));
    }, []); // O array vazio faz com que o useEffect execute apenas uma vez, após a montagem do componente

    return (
        <ProdContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ProdContext.Provider>
    );
}

export default ProdContext;
