import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SideBar } from '../components/ui/SideBar';
import { HomeScreen } from '../pages/HomeScreen'
import { LibraryScreen } from '../pages/LibraryScreen';
import { SearchScreen } from '../pages/SearchScreen';

export const AppRouter = () => {
  return (
    <div className='__general main-content'>
        <SideBar/>
        <main>
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/library' element={<LibraryScreen/>}/>
            <Route path='/search' element={<SearchScreen/>}/>
            <Route path='/*' element={<HomeScreen/>}/>
        </Routes>

        </main>
    </div>
  )
}
