import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum(a, b, t){
    const future = Date.now() + t * 1000
    while(Date.now() < future){}
    return a + b
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    const result = useMemo(() => sum(n1, n2, n3), [n1, n2]) 

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercício"/>
            <div className="center">
                <input className="input" type="number" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input className="input" type="number" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input className="input" type="number" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
