import React from "react";
import ReactAudioPlayer from 'react-audio-player';

const Backing = () => {
    return (
        <div className="pt-5 px-5">
            <h3> Adore You backing tracks (right click to download)</h3>
            <ReactAudioPlayer
                src="/assets/adore_you.mp3"
                autoPlay={false}
                controls
            />
        </div>
    )
}

export default Backing;


