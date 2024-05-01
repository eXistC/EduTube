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
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '80%', height: '80%' }}>
                <button onClick={onClose} style={{ position: 'absolute', right: 20, top: 20, backgroundColor: 'white' }}>Close</button>
                <iframe src={videoUrl} style={{ width: '100%', height: '100%' }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>,
        document.body
    );
}

export default VideoPlayer;
