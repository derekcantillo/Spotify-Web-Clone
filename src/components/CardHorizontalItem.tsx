import React from 'react'
import { Channel } from '../interfaces/channelInterface';

interface Props{
    channel: Channel;
  }

export const CardHorizontalItem = ({channel} : Props) => {


  return (
    <div className='_cards card-pod-container'>
        <div className='_cards card-pod-content'>
            <div className='_cards card-pod-img'>
                <img src={`${channel?.urls.logo_image.original}`}/>
                
            </div>
            <div className='_cards card-pod-title'>
                <h2>{channel.title}</h2>

            </div>
        </div>
        
    </div>
  )
}
