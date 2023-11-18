import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import WatchPageSkeleton from './WatchPageSkeleton'
import { addSearchResults } from '../utils/searchResultArray'
import { useDispatch } from 'react-redux'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const dispatch=useDispatch()

  useEffect(() => {
    getVideos()
  }, [])

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    setVideos(json.items)
  }
  
  
  if(videos.length==0) return <WatchPageSkeleton/>
  dispatch(addSearchResults(videos.slice(0,20)))
  console.log("videos",videos.slice(0,10));

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