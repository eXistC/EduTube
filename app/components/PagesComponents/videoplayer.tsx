import React from 'react';
import ReactDOM from 'react-dom';

interface VideoPlayerProps {
    videoUrl: string | null;
    onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onClose }) => {
    if (!videoUrl) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="relative w-4/5 h-4/5 rounded-lg overflow-hidden">
                <button onClick={onClose} className="absolute top-5 right-5 bg-teal-300 rounded-full p-2 cursor-pointer font-inter font-bold py-0">X</button>
                <iframe src={videoUrl} className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>,
        document.body
    );
}

export default VideoPlayer;
