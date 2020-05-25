import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Waypoint } from 'react-waypoint'

const ShortVideo = ({ slice }) => {
  const [playing, setPlaying] = useState(false)
  console.log(slice)
  return (
    <div key={slice.primary.video.size}>
      <Waypoint key={slice.primary.video.size} bottomOffset="20%" onEnter={() => setPlaying(true)} />
      <ReactPlayer playing={playing} url={slice.primary.video.url} loop={true} width="100%" height="auto" />
    </div>
  )
}

export default ShortVideo
