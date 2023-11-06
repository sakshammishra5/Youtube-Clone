import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  
  useEffect(() => {
    getVideos()
  }, [])
  
  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    setVideos(json.items)
  }
   
    return (
      <div className='flex flex-wrap justify-center '>
        {videos.map((video) =>
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard
              info={video} />
          </Link>
        )}
      </div>
    )

  }

export default VideoContainer