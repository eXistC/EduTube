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
        <div className="p-4 mt-4 space-y-8">
            <h2 className="text-lg font-semibold font-inter text-gray-500">
                {title}
            </h2>
            <div className="overflow-hidden 
                            grid 
                            grid-cols-1 
                            md:grid-cols-2 
                            lg:grid-cols-3 
                            xl:grid-cols-4 gap-0">
                {data.map((item) => (
                    <div key={item.id} className="rounded-lg 
                                                shadow-md p-2 
                                                transform 
                                                transition 
                                                duration-500 
                                                ease-in-out 
                                                hover:scale-105 
                                                flex 
                                                flex-col">
                        <div onClick={() => handleClick(item.videoUrl)} className="cursor-pointer relative flex-grow">
                            <img src={item.thumbnailUrl} alt="THUMBNAIL NOT FOUND" className="rounded-lg w-full h-auto text-lg font-inter text-neutral-100/50" />
                            <p className="absolute 
                                        bottom-2 
                                        right-2 
                                        bg-black/50 
                                        text-white 
                                        font-inter 
                                        text-sm 
                                        py-1 px-2 
                                        rounded">{item.duration}</p>
                        </div>
                        <h2 className="text-neutral-100 
                                    font-semibold 
                                    font-inter 
                                    text-lg
                                    mt-">{item.title}</h2>
                        <p className="text-gray-500 font-inter text-lg">{item.description}</p>
                    </div>
                ))}
            </div>
            <VideoPlayer videoUrl={videoUrl} onClose={handleClose} />
        </div>
    );
}

export default VideoList;
