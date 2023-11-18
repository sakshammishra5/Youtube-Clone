import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'
import { useNavigate } from "react-router-dom";
import { addSearchQuery } from '../utils/searchResultQuerySlice'



const Head = () => {

    const cacheData = useSelector((store) => store.search)
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)

    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const searchBar = useSelector((store) => store.searchResult.searchQuery)


    useEffect(() => {
        const timer = setTimeout(() => {
            if (cacheData[searchQuery]) {
                setSuggestions(cacheData[searchQuery])
            }
            else {
                getSearchSuggestion()
            }
        }, 400)
        return () => (clearTimeout(timer))
    }, [searchQuery])

    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestions(json[1])
        dispatch(cacheResults({ [searchQuery]: json[1] }))
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    const handleNavigate = (s) => {
        dispatch(addSearchQuery(s))
        setSearchQuery(s)
        Navigate('/searchResults')
    }

    const handleClick = () => {
        Navigate('/')
    }

    return (
        <div className=' grid grid-flow-col p-5 mb-5 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&usqp=CAU" alt="menu" />
                <img className='h-8 mx-2 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcG2zHXGdte9JuALqDpxjcqkuF4a1dCRoJ9CgVkRB8ztGGSieVsDazRmXm4gJAvg0ZOM&usqp=CAU" alt="youtube" onClick={() => handleClick()} />
            </div>

            <div className='col-span-10'>
                <div className='w-full flex justify-center'>
                    <div className='w-full ml-48 relative mx-auto'>
                        <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestion(true)}
                            onBlur={() => setTimeout(() => {
                                setShowSuggestion(false)
                            }, 300)}
                        />

                        <button className='border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full' onClick={() => handleNavigate()}>🔍</button>
                        {showSuggestion && (suggestions.length == 0 ? null :
                            <div className='absolute left-0 top-10 w-1/2  rounded-xl mt-1 pb-4 pt-4 bg-white font-semibold z-10 border border-gray-200 shadow-lg'>
                                <ul>
                                    {suggestions.map((s, i) =>
                                        <li key={i} className='py-1 px-3 hover:bg-gray-200 cursor-pointer' onClick={() => handleNavigate(s)}> 🔍 {s}</li>)}
                                </ul>
                            </div>)}
                    </div>

                </div>
            </div>

            <div className='col-span-1'>
                <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
            </div>
        </div>
    )
}

export default Head