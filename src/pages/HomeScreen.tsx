import React, { useEffect, useState } from 'react'
import { CardItem } from '../components/ui/CardItem'
import { NavBar } from '../components/ui/NavBar'
import { useChannels } from '../hooks/useChannels'



export const HomeScreen = () => {

  const {channelsRecommended, isLoading}=useChannels()



  return (
    <div className='_home home-content'> 
        <NavBar/>
            <h3>Top de podcast</h3>
        <div className='_home recommended-content'>
      
              {
                  !isLoading &&
                  channelsRecommended.map((chann) =>(

                    <CardItem channel={chann}/>
                  ))
              }
 
        </div>
    </div>
  )
}
