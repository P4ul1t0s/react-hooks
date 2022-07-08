export default function reducer(state, action){
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