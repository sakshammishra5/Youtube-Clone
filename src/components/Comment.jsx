import React from 'react'

const Comment = ({ name,text,profileImage }) => {
    // const { name, text, } = data
    
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 my-2'>
            <img className='h-8 mr-3 rounded-full' src={profileImage!=undefined?profileImage:"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"} alt="" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p className='max-w-lg line-clamp-3'>{text}</p>
            </div>
        </div>
    )
}

export default Comment