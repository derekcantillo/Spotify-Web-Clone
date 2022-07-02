import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay, faForwardStep, faBackwardStep} from '@fortawesome/free-solid-svg-icons'

export const ControlPlayer = () => {
  return (
    <div>
        <button className='_buttons btn-play'>
            <FontAwesomeIcon icon={faBackwardStep} color='white' size='2x'/>
        </button>
        <button className='_buttons btn-play'>
            <FontAwesomeIcon icon={faCirclePlay} color='white' size='2x'/>
        </button>
        <button className='_buttons btn-play'>
            <FontAwesomeIcon icon={faForwardStep} color='white' size='2x'/>
        </button>
    </div>
  )
}
