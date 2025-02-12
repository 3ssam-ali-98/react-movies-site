const INITIAL_VALUE = {
    value: ''
}

export function searchvalue (state=INITIAL_VALUE, action){

    switch(action.type){
        case "search":
            return{
                ...state,
                value: action.payload
            }
        default: 
            return state
    }
}