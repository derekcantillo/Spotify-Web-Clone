import React, { useRef, forwardRef} from 'react'
import { AudioClip } from '../../interfaces/audioInterface';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';



export const Audio =forwardRef<HTMLAudioElement>( (ref)=> {
  
const {audioActive, isPlaying }= useSelector((state: RootState) => state?.play)
  
  return (
    <audio
        ref={ref}
        src={`${audioActive?.urls.high_mp3}`}
        autoPlay={isPlaying}

    />
  )
})
