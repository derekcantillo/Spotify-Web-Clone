
import { ChangeEvent, RefObject, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { converTime } from '../../helpers/convertTime';



type ControlProps={
    audioRef: RefObject<HTMLAudioElement>
}

export const SlideAudio = ({audioRef} : ControlProps) => {
    const {isPlaying, audioActive }= useSelector((state: RootState) => state?.play)
    const dispatch = useDispatch()
    const [timeValue, settimeValue] = useState(1000)



    if(audioRef.current){

        audioRef.current.ontimeupdate = function() {getTimeAudio()};
    }


    const getTimeAudio =()=>{
        const time= audioRef.current?.currentTime;
        // document.getElementById("time").innerHTML = converTime(time as number);
        settimeValue(time as number)
        
    } 

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
        settimeValue(Number(event.target.value))
        if(audioRef.current){

            audioRef.current.currentTime = Number(event.target.value)
        }
    }


  return (
    <div className="range">
    <div className="field">
    <div className="value left">
        <small id='time'>
        {converTime(timeValue)}
        </small>
    </div>
    <input type="range" min="0" 
    
        max={audioActive?.duration} 
        value={timeValue} 
        onChange={handleInputChange} 
        step="1"/>
    <div className="value right">
        <small>
        {converTime(audioActive?.duration)}

        </small>
    </div>
    </div>
    </div>
  )
}
