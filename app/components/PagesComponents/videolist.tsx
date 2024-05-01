import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import VideoPlayer from './videoplayer';

interface VideoListProps {
    data: {
        id: string;
        title: string;
        description: string;
        videoUrl: string;
        thumbnailUrl: string;
        duration: string;
    }[];
    title: string;
    children?: React.ReactNode;
}

const VideoList: React.FC<VideoListProps> = ({ data, title }) => {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    if (isEmpty(data)) {
        return null;
    }

    const handleClick = (url: string) => {
        setVideoUrl(url);
    };

    const handleClose = () => {
        setVideoUrl(null);
    };

    return (
        <div className="px-4 md:px-64 mt-4 space-y-8">
            <h2 className="text-lg font-inter font-semibold text-neutral-100/30">
                {title}
            </h2>
            <div className="overflow-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.map((item) => (
                    <div key={item.id} className="bg-grey-100">
                        <h2 className = "text-neutral-100 font-inter">{item.title}</h2>
                        <p className = "text-neutral-100 font-inter">{item.description}</p>
                        <img src={item.thumbnailUrl} alt={item.title} />
                        <p className = "text-neutral-100 font-inter">Duration: {item.duration}</p>
                        <button onClick={() => handleClick(item.videoUrl)} className = "text-neutral-100 font-inter">Watch Video</button>
                    </div>
                ))}
            </div>
            <VideoPlayer videoUrl={videoUrl} onClose={handleClose} />
        </div>
    );
}

export default VideoList;
