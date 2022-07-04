import { types } from '../types/types';


const searcherInitialState ={
    searchText: '',

}

export const searcherReducer =(state= searcherInitialState, action : any)=>{

    switch (action.type) {

        case types.searcher.searchText:
            
            return {
                ...state,
                searchText: action.payload
            }
        
        default:
            return state;
    }
}