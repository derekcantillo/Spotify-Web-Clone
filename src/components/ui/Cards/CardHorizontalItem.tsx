import React from 'react'
import { Channel } from '../../../interfaces/channellFullInterface';

interface Props{
    channel: Channel;
  }

export const CardHorizontalItem = ({channel} : Props) => {


  return (
    <div className='_cards card-pod-container animate__animated animate__fadeIn'>
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
