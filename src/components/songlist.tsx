import React from "react";
import songList from "../../static/songs/songs";

export default function SongList() {
    return (
        <table>
            <tr>
                <td>Song </td><td>Artist</td>
            </tr>
            {songList.songs.map((song, index) => {
                return <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                </tr>
            })}
        </table>
    )
}