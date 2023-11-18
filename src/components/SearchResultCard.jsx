

const SearchResultCard = ({title,channelTitle,thumbnails,description}) => {

    return (
        <>
            <div className="flex ml-20 my-5">
                <div><img className="w-[360px] h-[201px] rounded-lg" src={thumbnails} alt="" /></div>
                <div className="ml-6">
                    <p className=" font-semibold text-lg line-clamp-1">{title}</p>
                    <div>
                        <p>451k views .2 years ago</p>
                    </div>
                    <div className="flex items-center my-5">
                        <img className="w-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiW8FAgn_U0p5M-QuYk2R0GvrlKbTmZzR61IMgadEwM_cM4SGs9mNYgsWtFrPby_bHfo&usqp=CAU" alt="" />
                        <p className="ml-4">{channelTitle}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResultCard