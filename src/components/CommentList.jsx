import Comment from './Comment'

// const CommentList = ({comments,allComments }) => {
//     return allComments.map((comment,index)=>(
//         <div>
//             <Comment data={comment}/>
//             <div className='ml-6'>
//                 <CommentList comments={comment.replies} />
//             </div>
//         </div>
//     ))
// }



const CommentList = ({allComments}) => {
    if(allComments==undefined) return null
  return (
    <>
 {allComments.map((c,i)=><Comment key={i} name={c.snippet.topLevelComment.snippet.authorDisplayName} text={c.snippet.topLevelComment.snippet.textDisplay}  profileImage={c.snippet.topLevelComment.snippet.authorProfileImageUrl}/>)}
    </>
  )
}

export default CommentList
