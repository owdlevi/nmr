/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { useSpring, animated } from 'react-spring'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

const OurStory = () => {
  const [open, toggle] = useState(false)
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: { scale: 10, opacity: 1, transform: 'scale(0.5)', freq: '0.0175, 0.0' },
    to: { scale: 10, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
    config: { duration: 2000 },
  })

  return (
    <div onClick={() => toggle(!open)} sx={{ height: '650px' }}>
      <animated.svg sx={{ height: '550px' }} style={{ transform, opacity }} viewBox="0 0 1021.76 546.76">
        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1.5" result="TURB" seed="8" />
            <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale} />
          </filter>
        </defs>
        <g filter="url(#water)">
          <animated.path
            fill="none"
            stroke="#2526e5"
            stroke-miterlimit="10"
            d="M129.46 193.14c-38.72 0-65.28-31.36-65.28-70.4 0-37.44 26.56-69.12 64.32-69.12 38.08 0 64.64 33 64.64 70.08 0 37.76-26.24 69.44-63.68 69.44zm1.92 53.12c67.84 0 122.24-54.4 122.24-124.48C253.62 53.94 197.62.5 128.5.5 56.5.5 3.7 55.54 3.7 128.82c0 70.08 61.76 117.44 127.68 117.44zm275.52-96.64c0 33.28-9.6 43.52-30.08 43.52-21.44 0-30.72-14.4-30.72-43.84V5h-60.48v145.26c0 45.76 13.44 67.84 41.28 84.16 13.76 8 30.72 11.84 50.56 11.84 35.84 0 62.4-15 78.08-40.32 8-12.8 11.84-31.36 11.84-56V5H406.9zM567.54 124V58.1h23c22.72 0 38.08 11.52 38.08 32 0 22.72-14.72 33.92-38.72 33.92zM692 241.78l-64.3-80.64c36.48-6.4 58.88-37.12 58.88-74.56 0-33.6-17.92-61.44-43.52-73-12.48-5.4-31.36-8.58-56-8.58h-77.44v236.8h57.92v-76.5h.64l54.72 76.48zM166.58 374.1c-.32-31.68-12.48-50.56-37.76-63.68a90 90 0 00-41.92-9.92c-43.52 0-82.56 29.44-82.56 69.76 0 30.72 17.6 51.2 56.32 66.88 21.44 8.64 47.68 17 47.68 35.84a22.6 22.6 0 01-22.72 22.72c-15 0-24.64-12.8-25-32.32H.5v5.12c0 50.88 33.92 77.76 85.44 77.76 51.2 0 82.56-26.88 82.56-72.64 0-31-13.12-49.92-65.28-72.32-25.92-11.2-38.72-17.6-38.72-31.68 0-10.56 9.6-18.56 20.8-18.56 11.84 0 18.88 6.08 21.44 23z"
          />
          <animated.polygon
            fill="none"
            stroke="#2526e5"
            stroke-miterlimit="10"
            points="286.26 541.78 286.26 358.1 332.66 358.1 332.66 304.98 179.06 304.98 179.06 358.1 225.78 358.1 225.78 541.78 286.26 541.78"
          />
          <animated.path
            fill="none"
            stroke="#2526e5"
            stroke-miterlimit="10"
            d="M472.5 493.14c-38.72 0-65.28-31.36-65.28-70.4 0-37.44 26.56-69.12 64.32-69.12 38.08 0 64.64 33 64.64 70.08 0 37.76-26.24 69.44-63.68 69.44zm1.92 53.12c67.84 0 122.24-54.4 122.24-124.48 0-67.84-56-121.28-125.12-121.28-72 0-124.8 55-124.8 128.32 0 70.08 61.76 117.44 127.68 117.44zM687.22 424v-65.9h23c22.72 0 38.08 11.52 38.08 32 0 22.72-14.72 33.92-38.72 33.92zM811.7 541.78l-64.32-80.64c36.48-6.4 58.88-37.12 58.88-74.56 0-33.6-17.92-61.44-43.52-73-12.48-5.44-31.36-8.64-56-8.64H629.3v236.8h57.92V465.3h.64l54.72 76.48z"
          />
          <animated.polygon
            fill="none"
            stroke="#2526e5"
            stroke-miterlimit="10"
            points="950.9 541.78 950.9 455.7 1020.98 304.98 956.02 304.98 920.5 400.02 885.3 304.98 819.7 304.98 890.42 455.7 890.42 541.78 950.9 541.78"
          />
        </g>
      </animated.svg>
    </div>
  )
}

export default OurStory
