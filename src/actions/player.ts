import { AudioClip } from '../interfaces/audioInterface'
import { AudioClipS } from '../interfaces/audioSpecificInterface'
import {types} from '../types/types'

export const setPlayState = (state : boolean)=>({
    type: types.player.isPlaying,
    payload: state
})
export const setAudioActive = (audio : AudioClip | AudioClipS)=>({
    type: types.player.audioActive,
    payload: audio
})