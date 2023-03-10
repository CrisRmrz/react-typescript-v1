import { useReducer } from "react";

const initialState = {
    contador: 0
}

type ActionType =
    | { type: 'incrementar' } //Esto es un or en TS
    | { type: 'decrementar' }
    | { type: 'custom', payload: number } //Con argumentos

const contadorReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'custom':
            return {
                ...state,
                contador: state.contador + action.payload
            }


        default:
            return state;
    }

}


export const ContadorReducer = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)

    return (
        <>
            <h2>Contador: {contadorState.contador} </h2>
            <button onClick={() => { dispatch({ type: 'incrementar' }) }} className='btn btn-outline-primary' >Incrementar</button>
            <button onClick={() => { dispatch({ type: 'decrementar' }) }} className='btn btn-outline-primary' >Decrementar</button>
            <button onClick={() => { dispatch({ type: 'custom', payload: 100  }) }} className='btn btn-outline-primary' >Con args</button>
        </>
    )
}
