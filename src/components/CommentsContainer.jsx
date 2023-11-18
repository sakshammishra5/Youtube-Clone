import React, { useEffect, useState } from 'react'
import CommentList from './CommentList'
import { Comment_List_API } from '../utils/constants'



const CommentsContainer = ({ videoId }) => {
    const [allComments, setAllComments] = useState([])
    useEffect(() => {
        fetchComments()
    }, [])

    const fetchComments = async () => {
        const data = await fetch(Comment_List_API + videoId)
        const json = await data.json()
        setAllComments(json.items)
        //  console.log(json.items);
        //  const {authorDisplayName,textDisplay}=json.items[0].snippet.topLevelComment.snippet
        //  console.log(authorDisplayName,textDisplay);
    }
    if (allComments == undefined) return null
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold '>
                Comments
            </h1>
            <CommentList allComments={allComments} />
        </div>
    )
}

export default CommentsContainer