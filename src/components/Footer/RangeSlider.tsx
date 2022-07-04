import React, { useEffect, useRef, useState } from 'react'
import { Range } from 'react-range';
import { useSelector } from 'react-redux';
import { converTime } from '../../helpers/convertTime';
import { RootState } from '../../store/store';

const STEP = 0.1;
const MIN = 0;
const MAX = 50;
interface Value{
  value: number[]
}
export const RangeSlider = () => {
  const {isPlaying, audioActive }= useSelector((state: RootState) => state?.play)
  const [timeValue, setTimeValue] = useState(0)

  const ref = useRef<NodeJS.Timeout>();


      useEffect(() => {

        ref.current && clearInterval(ref.current);
        ref.current = audioActive && setInterval(()=>setTimeValue(s=>s+1), audioActive?.duration )
      }, [audioActive?.duration])  


    const parsedTime = audioActive?.duration;

    const [value, setvalue] = useState<Value>({value: [0]})

    
  return (
    <>
    <small>{converTime(timeValue)}</small>
    <Range
          values={value.value}
          step={STEP}
          min={MIN}
          max={audioActive ? parsedTime : MAX}
          onChange={()=>setvalue(value)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "4px",
                  width: "100%",
                  borderRadius: "6px",
                  backgroundColor:'#1db954' ,
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "10px",
                width: "10px",
                borderRadius: "50px",
                backgroundColor: "#1db954",
                display: "flex",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
             

            </div>

          )}
        />
    </>
  )
}
