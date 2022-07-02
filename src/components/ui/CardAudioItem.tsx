import React from 'react'
import { useParams } from 'react-router-dom';
import { useAudioClips } from '../../hooks/useAudioClips';
import { AudioClip, Audios } from '../../interfaces/audioInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { setAudioActive, setPlayState } from '../../actions/player';
interface Props{
  audio: AudioClip;
}
export const CardAudioItem = ({audio}:Props) => {
  const dispatch = useDispatch()
  // const handleAudio =()=>{
  //   dispatch(setAudioActive(audio))
  //   dispatch(setPlayState(true))
  // }
  return (

    <div className='_cards card-ep-container'>
      

        <img src={`${audio.urls.image}`}  />
     
      
      <div className='_cards card-ep-text'>
        <h2>{audio.title} </h2>
        <p>{audio.description}</p>
        {/* <audio controls>
          <source src={`${audio.urls.high_mp3}`}/>
        </audio> */}
      </div>
      <button className='_buttons btn-play' onClick={()=>dispatch(setAudioActive(audio)) && dispatch(setPlayState(true))}>
        <FontAwesomeIcon icon={faCirclePlay} color='white' size='2x'/>
      </button>

    </div>

  )
}
