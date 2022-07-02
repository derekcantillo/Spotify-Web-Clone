import React from 'react'
import { AudioClip } from '../../interfaces/audioInterface';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export const Audio = ()=> {
const {audioActive, isPlaying }= useSelector((state: RootState) => state?.play)

  return (
    <audio
         
         src={`${audioActive?.urls.high_mp3}`}
        autoPlay={isPlaying}
    />
  )
}
