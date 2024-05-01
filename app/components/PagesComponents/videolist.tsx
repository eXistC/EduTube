'use Client';

import isEmpty from 'lodash/isEmpty';

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
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className="px-4 md:px-64 mt-4 space-y-8">
            <h2 className="text-lg font-inter font-semibold text-neutral-100/30">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div className="bg-grey-100"></div>
                {data.map((item) => (
                    <div key={item.id}>
                        <h2 className = "text-neutral-100 font-inter">{item.title}</h2>
                        <p className = "text-neutral-100 font-inter">{item.description}</p>
                        <img src={item.thumbnailUrl} alt={item.title} />
                        <p className = "text-neutral-100 font-inter">Duration: {item.duration}</p>
                        <a href={item.videoUrl} className = "text-neutral-100 font-inter">Watch Video</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoList;
