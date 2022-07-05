import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { useAudioSpecific } from '../hooks/useAudioSpecific';
import { setAudioActive, setPlayState } from '../actions/player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { NavBar } from '../components/ui/Navbar/NavBar';


type idParams={
  episodeId: string;
}
const AudioClipScreen = () => {
    const dispatch=useDispatch()
    const params = useParams<idParams>()
    const {episodeId} = params;
    const parsed = parseInt(episodeId as string)
    const {audioSpecific, isLoading}=useAudioSpecific(parsed)


    const handleSendAudio=()=>{
      if (audioSpecific){
        dispatch(setAudioActive(audioSpecific.audio_clip))
        dispatch(setPlayState(true))
      }
    }
      return (
        
        
        <div className='_channel channel-content'>
            <NavBar/>
          <div className='_channel channel-header'>
            <div className='_channel channel-img-header'>
              <img src={audioSpecific?.audio_clip.urls.image}/>

            </div>
            <div className='_channel channel-text-header'>
              
              <h3>Episode</h3>
              <h1>{audioSpecific?.audio_clip.title}</h1>
              <div className='_channel channel-name-channel'>
                <figure>
                  <img src={`${audioSpecific?.audio_clip.channel.urls.logo_image}`}/>
                </figure>
                <p>{audioSpecific?.audio_clip.channel.title}</p>
              </div>
            </div>

          </div>
          <div className='_channel channel-details-body'>
           
            <div className='_channel channel-description'>
                {/* <div  className='play-container'>

                  <button className='_buttons btn-play' onClick={handleSendAudio} >
                    <FontAwesomeIcon icon={faCirclePlay} color='#1ed760' size='6x'/>
                  </button>
                </div>
                 */}


                <h2>Description</h2>
                <p>{audioSpecific?.audio_clip.description}</p>
            </div>
    
          </div>
         
        </div>
      )
  
}

export default AudioClipScreen;