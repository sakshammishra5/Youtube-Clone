import { useSelector } from 'react-redux'
import RelatedVideoCard from './RelatedVideoCard'

const RelatedVideo = () => {
    const relatedVideo=useSelector((store)=>store.ResultArray.searchResult)
    console.log(relatedVideo);
  return (
    <div >
        <h1 className='flex justify-center font-semibold'>Related Video</h1>
        {relatedVideo[0].map((item,i)=> <RelatedVideoCard key={i} />)}
    </div>
  )
}

export default RelatedVideo