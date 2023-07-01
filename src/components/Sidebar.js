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
            <div className='w-48 p-2'>
                <h1 className='font-bold  '>one</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <h1 className='font-bold my-1'>two</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <h1 className='font-bold my-1'>three</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
