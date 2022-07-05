import {types} from '../types/types'

export const setLoading = (state : boolean )=>({
    type: types.ui.loading,
    payload: state
})