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
          <div className='_channel logo-container'>

            <img className='_channel img' src={logo_image.original}/>
    
          </div>
                {/* <img  src={`${detail?.channel.urls.banner_image.original}`}/> */}
            <div className='_channel header-title'>
              <h1>{title}</h1>
            </div>
            <div className='_channel header-subtitle'>
              <h3>{category.title}</h3>
            </div>
            <div className='_channel header-description'>
                <p>{description}</p>
            </div>
            {
              !isLoading &&
  
              audios?.audio_clips.map((audi)=>(
  
                <CardAudioItem audio={audi} />
              ))
            }
    
         
        </div>
      )
    }
  
}
