import React, { useState } from 'react'
import { Range } from 'react-range';

const STEP = 0.1;
const MIN = 0;
const MAX = 100;
interface Value{
  value: number[]
}
export const RangeSlider = () => {

    const [value, setvalue] = useState<Value>({value: [50]})
  return (
    <>
    <Range
          values={value.value}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => value.value}
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
