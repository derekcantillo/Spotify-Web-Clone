import {types} from '../types/types'


const uiInitialState = {
    loading: false,

}

export const uiReducer = (state = uiInitialState, action : any)=>{
    switch (action.type) {
        case types.ui.loading:
            return{
                ...state,
                loading: action.payload
            }

    
        default:
            return state;
    }
}