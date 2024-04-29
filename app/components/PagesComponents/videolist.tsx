'use Client';

import React from 'react';
import isEmpty from 'lodash/isEmpty';
import VideoCard from './VideoCard';

interface VideoListProps {
    data: Record<string, any>[];
    title: string;
}

const VideoList: React.FC<VideoListProps> = ({ data, title }) => {
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className="px-4 md:px-64 mt-4 space-y-8">
            <div>
                <h2 className="text-lg font-inter font-semibold text-neutral-100/30">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {data.map((video) => (
                        <VideoCard key={video.id} data={video}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VideoList;
