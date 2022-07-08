import React, { useReducer, useState } from 'react'
import {initialState, reducer} from '../../store'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

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
