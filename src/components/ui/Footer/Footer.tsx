
import { Range } from 'react-range';
import { useRef, useState, useEffect } from 'react';
import { RangeSlider } from './RangeSlider';
import { ControlPlayer } from './ControlPlayer';

import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


export const Footer = () => {
  const {isPlaying, audioActive }= useSelector((state: RootState) => state?.play)

  const audioRef = useRef<HTMLAudioElement>(null)


  return (
    <footer className='_footer footer'>
        <div className='_footer playerbar '>
          sdfsdf
          <div className='_footer mid-footer'>
            <ControlPlayer audioRef={audioRef}/>
            <RangeSlider/>

            <audio
    
                src={`${audioActive?.urls.high_mp3}`}
                ref={audioRef}
                autoPlay={isPlaying}

            />
          </div>
        </div>
    </footer>
  )
}
