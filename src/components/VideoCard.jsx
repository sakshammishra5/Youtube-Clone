import React from 'react'

const VideoCard = ({ info }) => {
    if (info == undefined) return null

    const { snippet, statistics } = info

    const { thumbnails, title, channelTitle } = snippet
    return (
        <div className='p-3 m-2 w-72 h-[275px] shadow-lg font-sans'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
            <ul className='mt-3'>
                <li className='font-medium leading-tight text-sm line-clamp-2 tracking-wide'>{title}</li>
                <ul className='mt-1 text-sm font-medium text-gray-600'>
                    <li className='line-clamp-1 mb-1 '>{channelTitle}</li>
                    <li className='mt-[-4px]'>{(statistics.viewCount) / 1000000}K</li>
                </ul>
            </ul>
        </div>
    )
}

export default VideoCard