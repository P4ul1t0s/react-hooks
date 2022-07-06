import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action){
    switch(action.type){
        case 'number_Add2':
            return {...state, number: state.number + 2}
        case 'number_mult7':
            return {...state, number: state.number * 7}
        case 'number_div25':
            return {...state, number: state.number / 25}
        case 'number_AddN':
        return {...state, number: state.number + parseInt(action.payload.numN)}
        case 'login':
            return {...state, user: {name: action.payload.nome}}
        case 'integer':
            return {...state, number: parseInt(state.number)}
        case 'limpar':
            return {...state, user: null, number: 0}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [inputNumber, setInputNumber] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício + Desafio"/>
            <div className="center">
                <span className="text">{state.user ? state.user.name : 'Sem usuário'}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'limpar'})}>Limpar</button>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: {nome: 'Maria'}})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'integer'})}>Int</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_Add2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_mult7'})}>×7</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_div25'})}>÷25</button>
                </div>
                <div>
                    <input type="number" className="input" value={inputNumber} onChange={e => setInputNumber(e.target.value)}/>
                    <button className="btn" onClick={() => dispatch({type: 'number_AddN', payload: {numN: inputNumber}})}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
