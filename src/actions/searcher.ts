
import {types} from '../types/types'

export const setQuerySearch = (state : string)=>({
    type: types.searcher.searchText,
    payload: state
})