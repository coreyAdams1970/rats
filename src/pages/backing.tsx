import React from "react";
import ReactAudioPlayer from 'react-audio-player';

const Backing = () => {
    return (
        <ReactAudioPlayer
            src="assets/adore_you.mp3"
            autoPlay={false}
            controls
        />
    )
}

export default Backing;


