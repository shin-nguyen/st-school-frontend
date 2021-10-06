const initialState ={
    listOrder:[],
    order: {}
}
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_ORDER':{
            return {...state, listOrder: action.payload}
        }
        case 'GET_ALL_ORDER_FAIL':{
            return {...state, error: action.payload}
        }
        case 'SAVE_ORDER':{
            return {...state, listOrder: action.payload}
        }
        case 'SAVE_ORDER_FAIL':{
            return {...state, error: action.payload}
        }
        case 'UPDATE_ORDER':{
            return {...state, listOrder: action.payload}
        }
        case 'UPDATE_ORDER_FAIL':{
            return {...state, error: action.payload}
        }
        case 'DELETE_ORDER':{
            return {...state, listOrder: action.payload}
        }   
        case 'DELETE_ORDER_FAIL':{
            return {...state, error: action.payload}
        }
        case 'GET_ORDER_BY_ID':{
            return {...state, order: action.payload}
        }
        case 'GET_ORDER_BY_ID_FAIL':{
            return {...state, error: action.payload}
        }
        default:
            return state   
    }
}

export default orderReducer;