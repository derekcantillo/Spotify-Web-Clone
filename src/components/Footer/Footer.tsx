
import { useRef, useState, useEffect } from 'react';
import { ControlPlayer } from './ControlPlayer';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { SlideAudio } from './SlideAudio';
import { VolumeControl } from './VolumeControl';


export const Footer = () => {
  const {isPlaying, audioActive }= useSelector((state: RootState) => state?.play)

  const audioRef = useRef<HTMLAudioElement>(null)
  
  const time= audioRef.current?.currentTime;
  
  useEffect(() => {
    console.log(time)
  }, [])
 

  return (
    <footer className='_footer footer'>
        <div className='_footer playerbar '>
          <div className='_footer card-footer-container'>
            {
              audioActive &&
              <div className='_footer card-footer-img'>
                <img src={`${audioActive?.urls.image}`}/>
              </div>
            }

            <div className='_footer card-footer-details'>
              <p className='_footer card-footer-title'>
                {
                  audioActive ? 
                  audioActive?.title
                  :
                  'Select a podcast to play / Seleccione un podcast para reproducir'
                }
              </p>
              <p className='_footer card-footer-title'>
                <small>{audioActive?.user.username}</small>
              </p>
            </div>

          </div>
          <div className='_footer mid-footer'>
            <ControlPlayer audioRef={audioRef}/>
            <div className='_footer range-slider'>

              <SlideAudio audioRef={audioRef}/>             
          
            </div>
            <audio
    
                src={`${audioActive?.urls.high_mp3}`}
                ref={audioRef}
                autoPlay={isPlaying}

            />
          </div>

          <div className='_footer right-footer'>
                <VolumeControl
                audioRef={audioRef}
                
                />
          </div>

        </div>
    </footer>
  )
}
