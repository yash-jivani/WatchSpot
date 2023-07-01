import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHanlder = () => {
        dispatch(toggleMenu());
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
                <a href='/'>
                    <img
                        className='h-8 cursor-pointer'
                        src='https://w7.pngwing.com/pngs/362/340/png-transparent-youtube-logo-streaming-media-youtube-logo-television-text-trademark.png'
                        alt='Youtube logo'
                    />
                </a>
            </div>
            <div className='col-span-10 '>
                <input
                    type='text'
                    className='w-1/2 border border-gray-400 p-2 rounded-l-full'
                />
                <button className='rounded-r-full border border-gray-400 p-2'>
                    Search
                </button>
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
