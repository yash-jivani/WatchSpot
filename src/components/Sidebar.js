import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    // early return pattern
    if (isMenuOpen === false) {
        return null;
    }
    return (
        <div>
            <div className='w-48 p-2 flex flex-col gap-4 font-semibold'>
                <ul className='flex flex-col gap-1'>
                    <li>Home</li>
                    <li>Shorts</li>
                    <li>Subscriptions</li>
                </ul>
                <hr />
                <ul className='flex flex-col gap-1'>
                    <li>LIbrary</li>
                    <li>History</li>
                    <li>Your Videos</li>
                    <li>Watch Later</li>
                    <li>Linked Videos</li>
                </ul>
                <hr />
                <h1 className="text-2xl">Explore</h1>
                <ul className='flex flex-col gap-1'>
                    <li>Tranding</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Films</li>
                    <li>Live</li>
                    <li>Gaming</li>
                    <li>News</li>
                    <li>Sport</li>
                    <li>Learning</li>
                    <li>Fashion</li>
                    <li>Beauty</li>
                </ul>
                <hr />
                <h1 className="text-2xl">Subscriptions</h1>
                <ul className='flex flex-col gap-1'>
                    <li>Channel 1</li>
                    <li>Channel 2</li>
                    <li>Channel 3</li>
                    <li>Channel 4</li>
                </ul>
                <hr />
            </div>
        </div>
    );
};

export default Sidebar;
