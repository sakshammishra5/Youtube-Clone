import { useSelector } from 'react-redux'
import RelatedVideoCard from './RelatedVideoCard'

const RelatedVideo = () => {
    const relatedVideo=useSelector((store)=>store.ResultArray.searchResult)
    console.log("related video",relatedVideo);
  return (
    < >
        <h1 className='flex justify-center font-semibold'>Related Video</h1>
        {relatedVideo[0].map((item,i)=> <RelatedVideoCard snippet={item.snippet} statistics={item.statistics} key={i} />)}
    </>
  )
}

export default RelatedVideo