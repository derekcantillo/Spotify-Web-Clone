
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, RefObject, useState } from 'react'

type ControlProps={
    audioRef: RefObject<HTMLAudioElement>
}


export const VolumeControl = ({audioRef} : ControlProps) => {
    const [volume, setVolume] = useState(1.0)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setVolume(Number(event.target.value))

        if(audioRef.current){
            audioRef.current.volume=volume;
        }
    }
  return (
    <>

    <FontAwesomeIcon icon={faVolumeUp} color='gray'/>
    <div className="range-volume">
          <div className="field-volume">
              
              <input 
                type="range" 
                min="0" 
                max="1.0"
                value={volume} 
                step="0.1"
                onChange={handleInputChange}
                />
  
          </div>
    </div>
    </>
  )
}
