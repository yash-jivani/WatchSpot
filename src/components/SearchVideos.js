import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import { Link } from "react-router-dom";

const ResultCard = ({ video }) => {
    const {
        id: { videoId },
    } = video;
    const { snippet } = video;
    const { thumbnails, title, channelTitle, description } = snippet;
    // console.log(videoId, title, channelTitle, description);
    return (
        <div className='flex gap-4 my-3'>
            <div className='w-1/3'>
                <img
                    src={thumbnails.medium.url}
                    className='rounded-xl w-full'
                    alt='thumbnail'
                />
            </div>
            <Link to={"/watch?v=" + videoId}>
                <div>
                    <h1 style={{ whiteSpace: "pre-wrap" }}>{title}</h1>
                    <p style={{ whiteSpace: "pre-wrap" }}>{channelTitle}</p>
                    <p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
                </div>
            </Link>
        </div>
    );
};

const SearchVideos = () => {
    const params = useParams();
    const [videos, setVideos] = useState([]);
    const { q } = params;
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&key=${GOOGLE_API_KEY}`;

    const getQueryVideos = async () => {
        const data = await fetch(URL);
        const json = await data.json();
        let allVideos = json.items;
        setVideos(allVideos);
        // console.log(allVideos);
    };

    useEffect(() => {
        getQueryVideos();
    }, [q]);

    return (
        <div className="m-5">
            <div>
                <h1 className='font-semibold text-lg my-4'>
                    Results for "{q}"
                </h1>
            </div>

            <div>
                {videos?.length > 0 &&
                    videos.map((currVid, index) => {
                        return <ResultCard key={index} video={currVid} />;
                    })}
            </div>
        </div>
    );
};

export default SearchVideos;
