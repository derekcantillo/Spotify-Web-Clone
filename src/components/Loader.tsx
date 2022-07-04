import React from 'react'
import { ScaleLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className="loader">
        <h1>Loading...</h1>
        <ScaleLoader color='#1db954'/>
    </div>
  )
}
