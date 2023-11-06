import React from 'react'

const VideoCard = ({ info }) => {
    if (info == undefined) return null
   
    const { snippet, statistics } = info
    // console.log(snippet);
    const { thumbnails, title, channelTitle } = snippet
    return (
        <div className='p-3 m-2 w-72 h-[275px] shadow-lg font-sans'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li className='font-bold line-clamp-2'>{title}</li>
                <ul className='mt-1 '>
                <li>{channelTitle}</li>
                <li className='mt-[-4px]'>{(statistics.viewCount)/1000000}K</li>
                </ul>
            </ul>
        </div>
    )
}

export default VideoCard