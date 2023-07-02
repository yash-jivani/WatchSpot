import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { GOOGLE_API_KEY } from "../utils/constant";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const vidId = searchParams.get("v");
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    const [videoData, setVideoData] = useState(null);
    const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidId}&key=${GOOGLE_API_KEY}`;

    useEffect(() => {
        getDescription();
        dispatch(closeMenu());
    });

    const getDescription = async () => {
        let data = await fetch(URL);
        data = await data.json();
        const { items } = data;
        const { snippet } = items[0];
        const { description } = snippet;
        setVideoData(description);
    };

    return (
        <div className='px-5 flex'>
            <div>
                <iframe
                    width='900'
                    height='500'
                    src={"https://www.youtube.com/embed/" + vidId}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                ></iframe>
                <p style={{ whiteSpace: "pre-wrap" }} className='w-2/3 my-5'>
                    {videoData}
                </p>
                <CommentsContainer />
            </div>
            <div className="w-full  mx-1">
                <h1 className="font-bold text-lg mx-3">Live Chat: 🚀</h1>
                <div className='border border-black h-[473px] mx-3 w-[500px]'>
                    <LiveChat />
                </div>
                
            </div>
        </div>
    );
};

export default WatchPage;
