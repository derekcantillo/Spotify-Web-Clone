
import { Range } from 'react-range';
import { useRef, useState, useEffect } from 'react';
import { RangeSlider } from './RangeSlider';
import { ControlPlayer } from './ControlPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShuffle, faVolumeLow} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


export const Footer = () => {
  const {isPlaying, audioActive }= useSelector((state: RootState) => state?.play)

  const audioRef = useRef<HTMLAudioElement>(null)


  return (
    <footer className='_footer footer'>
        <div className='_footer playerbar '>
          <div className='_footer card-footer-container'>

            <div className='_footer card-footer-img'>
              <img src={`${audioActive?.urls.image}`}/>
            </div>

            <div className='_footer card-footer-details'>
              <p className='_footer card-footer-title'>
                {audioActive?.title}
              </p>
              <p className='_footer card-footer-title'>
                <small>{audioActive?.user.username}</small>
              </p>
            </div>

          </div>
          <div className='_footer mid-footer'>
            <ControlPlayer audioRef={audioRef}/>
            <RangeSlider/>

            <audio
    
                src={`${audioActive?.urls.high_mp3}`}
                ref={audioRef}
                autoPlay={isPlaying}

            />
          </div>

          <div className='_footer right-footer'>
            <FontAwesomeIcon icon={faShuffle} color='gray'/>
            <FontAwesomeIcon icon={faVolumeLow} color='gray'/>
          </div>

        </div>
    </footer>
  )
}
