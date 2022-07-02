import React, { RefObject, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay, faForwardStep, 
        faBackwardStep, faCirclePause, 
        faRotateForward, faRotateBackward} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { setPlayState } from '../../../actions/player';
import { useRef } from 'react';

type ControlProps={
    audioRef: RefObject<HTMLAudioElement>
}
export const ControlPlayer = ({audioRef} : ControlProps) => {
    const {isPlaying, audioActive }= useSelector((state: RootState) => state?.play)
    const dispatch = useDispatch()

    const handlePause=()=>{
        if (audioRef !== null && audioRef.current){
            audioRef.current.pause();
            dispatch(setPlayState(false))
        }
    }
    const handlePLay=()=>{
        if (audioRef !== null && audioRef.current){
            audioRef.current.play();
            dispatch(setPlayState(true));
        }
    }
  return (
    <div>
        <button className='_buttons btn-play'>
            <FontAwesomeIcon icon={faRotateBackward} color='gray' size='2x'/>
        </button>
        <button className='_buttons btn-play'>
            <FontAwesomeIcon icon={faBackwardStep} color='gray' size='2x'/>
        </button>
        {
            isPlaying ? 
            <button className='_buttons btn-play' onClick={()=>handlePause()}>
                <FontAwesomeIcon icon={faCirclePause} color='white' size='2x'/>
            </button>
            :
            <button className='_buttons btn-play' onClick={()=>handlePLay()}>
                <FontAwesomeIcon icon={faCirclePlay} color='white' size='3x'/>
            </button>

        }
        
        <button className='_buttons btn-play'>
            <FontAwesomeIcon icon={faForwardStep} color='gray' size='2x'/>
        </button>
        <button className='_buttons btn-play'>
            <FontAwesomeIcon icon={faRotateForward} color='gray' size='2x'/>
        </button>
    
    </div>
  )
}
