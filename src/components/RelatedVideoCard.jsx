import React from 'react'

const RelatedVideoCard = ({snippet,statistics}) => {
    console.log(snippet);
    const {viewCount}=statistics
    const {channelTitle,thumbnails,description,title }=snippet
  return (
    <div className='w-full flex ml-11 my-4'>
      <div className='w-6/12'>
        <img className='h-24 rounded-lg '  src={thumbnails.medium.url} alt="" />
      </div>
      <div className='w-6/12 ml-4'>
        <div className=' line-clamp-2 text-sm font-semibold'>
            {title}
        </div>
        <div className='mt-2 text-[13px] text-gray-800'>
        <p>{channelTitle}</p>
        <p className='mt-[-1px]'>{viewCount} views</p>
        </div>
      </div>
    </div>
  )
}

export default RelatedVideoCard