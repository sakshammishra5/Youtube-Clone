import React from 'react'

const RelatedVideoCard = () => {
    
  return (
    <div className='flex ml-11 my-4'>
      <div className='w-full'>
        <img className='w-full h-32 rounded-lg shadow-xl'  src="https://images.unsplash.com/photo-1696268516413-56e2c7c37639?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D" alt="" />
      </div>
      <div className='ml-4'>
        <div className=' line-clamp-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, vitae?
        </div>
        <div className='mt-2'>
        <p>tech suneja</p>
        <p className='mt-[-8px]'>2000 views</p>
        </div>
      </div>
    </div>
  )
}

export default RelatedVideoCard