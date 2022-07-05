import React from 'react'
import { useParams } from 'react-router-dom'
import { useChannelDetails } from '../hooks/useChannelDetails'
type idParams={
    channelId: string;
}
export const ChannelScreen = () => {
    const params = useParams<idParams>()

    const {channelId} = params;
    const parsed = parseInt(channelId as string)

    const{state, isLoading}=useChannelDetails(parsed)
    console.log(state);
   
    
  return (
    
    <div className='_channel channel-content'>
        
            <div className='_channel pintar-rojo'>

            </div>
            <img src={`${state?.channel.urls.banner_image.original}`}/>

            <div>
                
                    <div className='_buttons play-icon'>
                        <div className='_buttons circle'>
                        <div className='_buttons triangle'>

                        </div> 

                        </div>

                    </div>

            

            </div>
       

     
    </div>
  )
}
