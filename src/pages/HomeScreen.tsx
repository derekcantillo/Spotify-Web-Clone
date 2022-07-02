import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardItem } from '../components/ui/CardItem'
import { NavBar } from '../components/ui/NavBar'
import { useChannelDetails } from '../hooks/useChannelDetails'
import { useChannels } from '../hooks/useChannels'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';



export const HomeScreen = () => {
  const navigate = useNavigate()
  const {channelsRecommended}=useChannels()
  const {loading}=useSelector((state : RootState) => state.ui)
  const handleNavigate =(channelId : number)=>{
    navigate(`/channel/${channelId}`)
  }

  return (
    <div className='_home home-content'> 
        <NavBar/>
            <h3>Top de podcast</h3>
        <div className='_home recommended-content'>
      
              {
                !loading &&
                  
                  channelsRecommended.map((chann) =>(
                    <div key={chann.id} onClick={()=>handleNavigate(chann.id)}>

                      <CardItem channel={chann}/>
                    </div>
                  ))
              }
 
        </div>
    </div>
  )
}
