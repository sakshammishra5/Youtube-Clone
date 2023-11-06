import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md p-2'>
       <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" /> 
       <span className='font-bold px-2'>{name}</span>
       <span className='ml-4'>{message}</span>
    </div>
  )
}

export default ChatMessage