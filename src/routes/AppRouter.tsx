import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SideBar } from '../components/ui/SideBar';
import { HomeScreen } from '../pages/HomeScreen'
import { LibraryScreen } from '../pages/LibraryScreen';

export const AppRouter = () => {
  return (
    <div className='__general main-content'>
        <SideBar/>

        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/library' element={<LibraryScreen/>}/>
        </Routes>
    </div>
  )
}
