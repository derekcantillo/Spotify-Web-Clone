
import { Range } from 'react-range';
import {useState} from 'react';
import { RangeSlider } from './RangeSlider';
import { ControlPlayer } from './ControlPlayer';


export const Footer = () => {



  return (
    <footer className='_footer footer'>
        <div className='_footer playerbar '>
          sdfsdf
          <div className='_footer mid-footer'>
            <ControlPlayer/>
            <RangeSlider/>
          </div>
        </div>
    </footer>
  )
}
