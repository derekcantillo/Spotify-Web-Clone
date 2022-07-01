import React from 'react'
import edn from '../../assets/edn.jpg'

export const CardItem = () => {
  return (
    
    <div className='_cards card-container'>
      <div className='_cards img-holder'>

        <img src={edn} className='_cards img' />
      </div>
      <div className='_cards card-text'>
        <h2>Escuela de Nada</h2>
        <p>El mejor Podcast de Latinoamerica</p>
      </div>
      <div className='_cards play-icon'>
        <div className='_cards circle'>
          <div className='_cards triangle'>

          </div> 

        </div>

      </div>
    </div>
  )
}
