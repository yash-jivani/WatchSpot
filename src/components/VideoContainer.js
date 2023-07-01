import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "./../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    };

    return (
        <div className='p-2 flex flex-wrap'>
            {videos.map((currVid) => {
                return (
                    <Link to={"/watch?v=" + currVid.id} key={currVid.id}>
                        <VideoCard info={currVid} key={currVid.id} />
                    </Link>
                );
            })}
        </div>
    );
};

export default VideoContainer;
