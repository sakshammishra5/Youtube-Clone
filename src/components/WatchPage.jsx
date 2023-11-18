import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat"
import RelatedVideo from "./RelatedVideo"
import { closeMenu } from "../utils/appSlice"


const WatchPage = () => {
    const dispatch = useDispatch()
    const RelatedVideoArray = useSelector((store) => store.ResultArray.searchResult)
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className="flex flex-col">
            <div className="w-auto p-2 m-0 flex ">
                <div className="w-8/12">

                    <iframe className="rounded-2xl w-full h-[440px]"  src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=7xm-Et83iwHawklx`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    <div className="w-11/12">
                        <CommentsContainer videoId={searchParams.get("v")} />
                    </div>
                </div>
                    {RelatedVideoArray.length !== 0 && <div className="w-3/12">
                        <RelatedVideo />
                    </div>}
            </div>

        </div>
    )
}

export default WatchPage

// w-full sm:h-1/6 md:h-1/6 lg:h-1/5 xl:h-1/4 2xl:h-1/2