import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from '../components/loader/Loader';
import { Footer } from '../components/Footer/Footer';
import { SideBar } from '../components/ui/SideBar';

const Home = lazy(()=> import('../pages/HomeScreen') );
const Channel = lazy(()=> import('../pages/ChannelScreen') );
const Library= lazy(()=> import('../pages/LibraryScreen') );
const Search = lazy(()=> import('../pages/SearchScreen') );


export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <div className='main-content'>
          <SideBar/>
          <main>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/library' element={<Library/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/channel/:channelId' element={<Channel/>}/>
              {/* <Route path='/episode/:episodeId' element={<AudioClipChannel/>}/> */}
              <Route path='/*' element={<Home/>}/>
          </Routes>

          </main>
          <Footer/>
      </div>

    </Suspense>
  )
}
