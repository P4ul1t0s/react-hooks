import {number_Add2} from './actions/number'
import reducer from './reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export{
    reducer,
    initialState
}