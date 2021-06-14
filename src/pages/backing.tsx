import React from "react";
import ReactAudioPlayer from 'react-audio-player';

const tracks = [
    { title: "Adore You", src: "/assets/adore_you.mp3" },
    { title: "Come And Get Your Love", src: "/assets/come_get_love_NO_VOCAL.mp3" },

]
const Track = ({ src, title }) =>
    <div className="pt-5 px-5">
        <h3> {title}</h3>
        <ReactAudioPlayer
            src={src}
            autoPlay={false}
            controls
        />
    </div>

const Backing = () => {
    return (
        <div>
            {tracks.map((track, index) => {
                return <Track key={index} src={track.src} title={track.title} />
            })}

        </div>
    )
}

export default Backing;


