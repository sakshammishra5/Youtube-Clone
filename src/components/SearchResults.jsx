import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { YOUTUBE_SEARCH_BAR_RESULT_API } from "../utils/constants";
import SearchResultCard from "./SearchResultCard";
import { Link } from "react-router-dom";
import { addSearchResults } from "../utils/searchResultArray";

const SearchResults = () => {
  const searchQuery = useSelector((store) => store.searchResult.searchQuery)
  const dispatch = useDispatch()
  const [result, setResult] = useState([])

  useEffect(() => {
    fetchData()
  }, [searchQuery])


  const fetchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_BAR_RESULT_API + searchQuery)
    const json = await data.json()
    setResult(json.items)
    dispatch(addSearchResults(json.items))
  }

  // console.log("result", result);
  return (
    <div className="flex flex-col">
      {result.map((item) =>
        <Link to={`/watch?v=${item.id.videoId}`} key={item.id.videoId}>
          <SearchResultCard
            key={item.id.videoId} title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            thumbnails={item.snippet.thumbnails.medium.url}
            description={item.snippet.description}
          />
        </Link>)}
    </div>
  )
}

export default SearchResults