import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../utils/liveChatSlice";
import { generateRamdomStr, generateRandomName } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const allMsgs = useSelector((store) => store.liveChat.msgs);
    const [txt, setTxt] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                addMsg({
                    name: generateRandomName(),
                    message: generateRamdomStr(15) + " " + generateRamdomStr(5),
                })
            );
        }, 1500);
        return () => {
            return clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div>
                <hr />
                <div className='h-[473px] overflow-y-scroll flex flex-col-reverse w-full'>
                    {allMsgs.map((currMsg, index) => {
                        return (
                            <ChatMsg
                                key={index}
                                name={currMsg.name}
                                message={currMsg.message}
                            />
                        );
                    })}
                </div>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addMsg({
                            name: "Yash",
                            message: txt,
                        })
                    );
                    setTxt("")
                }}
            >
                <input
                    className="px-2 py-1 border border-gray-700 rounded w-2/3"
                    type='text'
                    placeholder='Text here...'
                    value={txt}
                    onChange={(e) => {
                        setTxt(e.target.value);
                    }}
                />
                <button className="bg-green-400 px-2 py-1 rounded w-1/4 mx-3">Submit</button>
            </form>
        </>
    );
};

export default LiveChat;
