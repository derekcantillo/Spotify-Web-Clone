
import { AudioClip } from '../../interfaces/audioInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { setAudioActive, setPlayState } from '../../actions/player';
import { converTime } from '../../helpers/convertTime';
import { RootState } from '../../store/store';

interface Props{
  audio: AudioClip;
}

export const CardAudioItem = ({audio}:Props) => {
  const {audioActive }= useSelector((state: RootState) => state?.play)
  const dispatch = useDispatch()


  return (
    <div className='_cards card-ep-container animate__animated animate__fadeIn'>
        <div className='_cards card-ep-content'>
            <div className='_cards card-ep-img'>
                <img src={`${audio.urls.image}`} />
                
            </div>
            <div className='_cards card-ep-details'>
              <div className='_cards card-ep-title '>
                  <h3 className={audioActive?.title === audio.title ? '_cards ep-title active' : '_cards ep-title'}>{audio.title}</h3>

              </div>
              <div className='_cards card-ep-description'>
                <p>{audio.description}</p>
              </div>

              <div className='_cards card-ep-control'>
                <div className='_cards card-ep-play' >
                  <button onClick={()=>dispatch(setAudioActive(audio)) && dispatch(setPlayState(true))} >

                  <FontAwesomeIcon icon={faCirclePlay} color='white' size='2x'/>
                  </button>

                </div>
                <div className='_cards card-ep-time'>
                  <p>Duration: {converTime(audio.duration)}</p>
                </div>
              </div>

            </div>
        </div>
        
    </div>


  )
}
