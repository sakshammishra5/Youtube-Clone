import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  
  // useEffect(()=>{
  // const i=  setInterval(() => {
  //     console.log("API polling!");
  //   }, 2000);

  //   return ()=> clearInterval(i) ,console.log("cleared");
  // },[])

  return (
    <div className='w-96 h-[491px] ml-4 p-2 border border-gray-600'>
        <div className='text-center font-extrabold border border-b-2'>
            Chat
        </div>
        <div>
            <ChatMessage name={"Saksham Mishra"} message={"hi this id youtube"}/>
            <ChatMessage name={"Saksham Mishra"} message={"hi this id youtube"}/>
        </div>
    </div>
  )
}

export default LiveChat