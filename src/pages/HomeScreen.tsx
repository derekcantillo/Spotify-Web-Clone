import React from 'react'
import { CardItem } from '../components/ui/CardItem'
import { NavBar } from '../components/ui/NavBar'
import { SideBar } from '../components/ui/SideBar'

export const HomeScreen = () => {
  return (
    <div className='_home home-content'> 
        <NavBar/>
            <h3>Top de podcast</h3>
        <div className='_home recommended-content'>
            
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            
        </div>
    </div>
  )
}
