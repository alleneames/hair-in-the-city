let defaultState = {
   prices: []
}

const MAINREDUCER = (state = defaultState, action)=> {
    if(action.type === "SET_DATA") {
        return{
            ...state,
            prices: action.prices
        }

    } else {
        return {
            ...state
        }
    }
}

export default MAINREDUCER;