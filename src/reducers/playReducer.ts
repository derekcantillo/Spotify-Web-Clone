import { types } from '../types/types';


const playInitialState ={
    isPlaying: false,
    audioActive: null,
}

export const playReducer =(state= playInitialState, action : any)=>{

    switch (action.type) {

        case types.player.isPlaying:
            
            return {
                ...state,
                isPlaying: action.payload
            }
        case types.player.audioActive:
            return{
                ...state,
                audioActive: action.payload
            }
        default:
            return state;
    }
}