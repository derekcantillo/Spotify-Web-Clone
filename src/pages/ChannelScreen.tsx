import React from 'react'
import { useParams } from 'react-router-dom'
import { CardAudioItem } from '../components/ui/CardAudioItem';
import { useChannelDetails } from '../hooks/useChannelDetails'
import { useAudioClips } from '../hooks/useAudioClips';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type idParams={
    channelId: string;
}
export const ChannelScreen = () => {
    const params = useParams<idParams>()
    const {loading}=useSelector((state : RootState) => state.ui)
  
    const {channelId} = params;
    const parsed = parseInt(channelId as string)
  
    const{detail, isLoading}=useChannelDetails(parsed)
    const{audios}=useAudioClips(parsed)

    

    if (!isLoading) {

      const {channel} = detail;
      const {category, title, description, urls}=channel
      const {logo_image} = urls
      return (
        
        
        <div className='_channel channel-content'>

          <div className='_channel channel-header'>
            <div className='_channel channel-img-header'>
              <img src={logo_image.original}/>

            </div>
            <div className='_channel channel-text-header'>
              <h3>Podcast</h3>
              <h1>{title}</h1>
              <div className='_channel channel-name-channel'>
                <figure>
                  <img src={logo_image.original}/>
                </figure>
                <p>{title}</p>
              </div>
            </div>

          </div>
          <div className='_channel channel-body'>
           
            <div className='_channel channel-eps'>
              <h2>All Episodes</h2>
            {
              !isLoading &&
  
              audios?.audio_clips.map((audi)=>(
  
                <CardAudioItem audio={audi} />
              ))
            }
            </div>
            <div className='_channel channel-description'>
                <h2>Description</h2>
                <p>{description}</p>
            </div>
    
          </div>
         
        </div>
      )
    }
  
}
