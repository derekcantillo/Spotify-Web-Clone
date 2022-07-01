import React, { useEffect } from 'react'
import edn from '../../assets/edn.jpg'
import { Channel } from '../../interfaces/channelInterface'


interface Props{
  channel: Channel;
}
export const CardItem = ({channel} : Props) => {
  
  return (
    
    <div className='_cards card-container'>
      <div className='_cards img-holder'>

        <img src={`${channel.urls.logo_image.original}`} className='_cards img' />
      </div>
      <div className='_cards card-text'>
        <h2>Title</h2>
        <p>Description para modificar</p>
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
