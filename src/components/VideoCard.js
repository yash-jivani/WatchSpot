import React from "react";

const VideoCard = (props) => {
    const { info } = props;
    const { snippet, statistics } = info;
    const { thumbnails, channelTitle, title } = snippet;
    return (
        <div className='p-2 shadow-md rounded-lg m-2 w-48'>
            <img
                src={thumbnails?.medium?.url}
                className='rounded-lg'
                alt='video thumbnail'
            />
            <ul className='mt-2'>
                <li className='font-bold text-sm'>{title}</li>
                <li className=''>{channelTitle}</li>
                <li className=''>{statistics?.viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;
