
import { AudioClip } from '../../../interfaces/audioInterface';
import { Channel } from '../../../interfaces/channelInterface'
import { ChannelF } from '../../../interfaces/channelsFinders';


interface Props{
  channel?: Channel | ChannelF;
  audio?: AudioClip
}
export const CardItem = ({channel, audio} : Props) => {
  
  return (
    
    <div className='_cards card-container animate__animated animate__fadeIn'>
    
        <div className='_cards img-holder'>

          <img src={`${channel ?channel.urls.logo_image.original : audio?.urls.image}`}  className='_cards img'/>
        </div>

        <div className='_cards card-text'>
          <h2 className='_cards card-title'>{channel ? channel.title : audio?.title}</h2>
          <p>{channel ? channel.description : audio?.description}</p>
       
      </div>
      <div className='_cards play-icon'>
        <div className='_cards circle'>
          <div className='_cards triangle'>

          </div> 

        </div>

      </div>
    </div>
  )
}
