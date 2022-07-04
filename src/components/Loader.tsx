import React from 'react'
import { GridLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className="loader">
        <h1>Cargando...</h1>
        <div className="loader-element"></div>
    </div>
  )
}
