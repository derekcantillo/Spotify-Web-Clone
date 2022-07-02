import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/ui/Footer/Footer';
import { SideBar } from '../components/ui/SideBar';
import { ChannelScreen } from '../pages/ChannelScreen';
import { HomeScreen } from '../pages/HomeScreen'
import { LibraryScreen } from '../pages/LibraryScreen';
import { SearchScreen } from '../pages/SearchScreen';

export const AppRouter = () => {
  return (
    <div className='main-content'>
        <SideBar/>
        <main>
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/library' element={<LibraryScreen/>}/>
            <Route path='/search' element={<SearchScreen/>}/>
            <Route path='/channel/:channelId' element={<ChannelScreen/>}/>
            <Route path='/*' element={<HomeScreen/>}/>
        </Routes>

        </main>
        <Footer/>
    </div>
  )
}
