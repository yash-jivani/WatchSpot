import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const vidId = searchParams.get("v");
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    const [videoData, setVideoData] = useState(null);
    const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidId}&key=AIzaSyCoUE0i-j1kVKaozDeSob_KX7-24xQDSUo`;
    useEffect(() => {
        getDescription();
        dispatch(closeMenu());
    });

    const getDescription = async () => {
        let data = await fetch(URL);
        data = await data.json();
        const { items } = data;
        const {
            snippet: { description },
        } = items[0];
        // console.log(description);
        setVideoData(description);
    };

    return (
        <div className='px-5'>
            <iframe
                width='1200'
                height='600'
                src={"https://www.youtube.com/embed/" + vidId}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            ></iframe>
            <p style={{whiteSpace: 'pre-wrap'}}>{videoData}</p>
        </div>
    );
};

export default WatchPage;
