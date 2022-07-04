import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function isImparPar(num){
    const n = parseInt(num)
    if(n%2 === 0){
        return 0
    }else{
        return 1
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [number2, setNumber2] = useState(0)
    const [fatorial, setFatorial] = useState(1)
    const [imparPar, setImparPar] = useState(0)

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if(fatorial > 1000000){
            document.title = "Eitaporra!"
        }else{
            document.title = "React App"
        }
    }, [fatorial])

    useEffect(function(){
        setImparPar(isImparPar(number2))
    }, [number2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={(e => setNumber(e.target.value))}/>
            </div>
            <SectionTitle title="Exercício #02 - Chalenge"/>
            <div className="center">
                <div>
                    <span className="text">{number2} é </span>
                    <span className="text red">{imparPar === 0 ? 'par' : 'ímpar'}</span>
                </div>
                <input type="number" className="input" value={number2} onChange={(e => setNumber2(e.target.value))}/>
            </div>
        </div>
    )
}

export default UseEffect