import React from "react";
import Btn from "./Btn";

const names = [
    "Live",
    "Games",
    "Show",
    "Javascript",
    "Live",
    "Games",
    "Show",
    "Javascript",
    "Live",
    "Games",
    "Show",
    "Javascript",
    "Show",
    "Javascript",
    "Live",
    "Games",
    "Show",
];

const BtnList = () => {
    return (
        <div className='flex p-2'>
            {names.map((currName, index) => {
                return <Btn name={currName} key={index} />;
            })}
        </div>
    );
};

export default BtnList;
