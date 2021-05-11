import React from "react";
import ReactAudioPlayer from 'react-audio-player';

const tracks = [
    { title: "Adore You", src: "/assets/adore_you.mp3" },
    { title: "Thrift Shop", src: "/assets/thrift_shop.mp3" },
    { title: "Uptown Funk", src: "/assets/uptown_funk.mp3" },
    { title: "Shape Of You", src: "/assets/shape_of_you.mp3" },
    { title: "Don't", src: "/assets/dont.mp3" },

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
                <Track key={index} src={track.src} title={track.title} />
            })}

        </div>
    )
}

export default Backing;


