import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const dispatch = useDispatch();
    const toggleMenuHanlder = () => {
        dispatch(toggleMenu());
    };

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchResults(searchQuery);
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchResults = async (searchQuery) => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(
            cacheResults({
                [searchQuery]: json[1],
            })
        );
        // console.log(json[1]);
        // console.log("called: " + searchQuery);
    };
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/results/" + searchQuery);
    };

    return (
        <div className='grid grid-flow-col p-2 border-b-2 border-black items-center'>
            <div className='flex col-span-1 place-items-center'>
                <img
                    onClick={() => toggleMenuHanlder()}
                    className='h-8 cursor-pointer'
                    src='https://img.favpng.com/16/8/3/hamburger-button-computer-icons-menu-png-favpng-WC4i2RFNSeQesWKV2GZBxwrCH.jpg'
                    alt='humberger menu'
                />
                <a href='/' className='font-bold text-xl'>
                    WatchSpot
                </a>
            </div>
            <div className='col-span-10 relative'>
                <div>
                    <input
                        value={searchQuery}
                        placeholder='Search'
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type='text'
                        onFocus={() => {
                            setShowSuggestion(true);
                        }}
                        onBlur={() => {
                            setShowSuggestion(false);
                        }}
                        className='w-1/2 border border-gray-400 p-2 rounded-l-full'
                    />
                    <button
                        className='rounded-r-full border border-gray-400 p-2'
                        onClick={() => {
                            return handleSearch(searchQuery);
                        }}
                    >
                        🔍
                    </button>
                    {showSuggestion && suggestions.length > 0 && (
                        <ul className='absolute bg-white w-1/2 p-2 rounded-lg'>
                            {suggestions &&
                                suggestions.map((currSuggestion, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className='mb-1 hover:bg-gray-100 cursor-pointer'
                                        >
                                            {currSuggestion}
                                        </li>
                                    );
                                })}
                        </ul>
                    )}
                </div>
            </div>
            <div className='col-span-1  place-items-center'>
                <img
                    className='h-8'
                    src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
                    alt='user logo'
                />
            </div>
        </div>
    );
};

export default Header;
