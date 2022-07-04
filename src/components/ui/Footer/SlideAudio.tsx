import React, { RefObject, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay, faForwardStep, 
        faBackwardStep, faCirclePause, 
        faRotateForward, faRotateBackward} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { setPlayState } from '../../../actions/player';
import { useRef } from 'react';
import { converTime } from '../../../helpers/convertTime';


type ControlProps={
    audioRef: RefObject<HTMLAudioElement>
}
export const SlideAudio = ({audioRef} : ControlProps) => {
    const {isPlaying, audioActive }= useSelector((state: RootState) => state?.play)
    const dispatch = useDispatch()
    const [timeValue, settimeValue] = useState(0)
    
    useEffect(() => {
        getCurrentTime()
    
    }, [audioRef.current])
    const getCurrentTime=()=>{
        if (audioRef !== null ){
            const time= audioRef.current?.currentTime;
            
            return time
        }
    }
  return (
    <div className="range">
    <div className="field">
    <div className="value left">
        <small>
        {getCurrentTime()}

        </small>
    </div>
    <input type="range" min="0" 
    
        max={audioActive?.duration} 
        value={timeValue} 
        onChange={(event)=>settimeValue(Number(event.target.value))} step="1"/>
    <div className="value right">
        <small>
        {converTime(audioActive?.duration)}

        </small>
    </div>
    </div>
    </div>
  )
}
