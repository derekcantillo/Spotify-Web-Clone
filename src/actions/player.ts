import { AudioClip } from '../interfaces/audioInterface'
import {types} from '../types/types'

export const setPlayState = (state : boolean)=>({
    type: types.player.isPlaying,
    payload: state
})
export const setAudioActive = (audio : AudioClip)=>({
    type: types.player.audioActive,
    payload: audio
})