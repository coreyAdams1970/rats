import React, { useEffect, useState } from "react";
import songList from "../../static/songs/songs";
import styled from "styled-components";
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import { Button } from "react-bootstrap";

const SongTable = styled.table`
    .songs-header {
        font-weight: bold;
        border-bottom:1px solid black;
    }

    tr, th, td {
        border:none;

        button , button:hover{
            background-color: #ae3a2d;
            border:1px solid #ae3a2d;
            width: 30px;
            height: 30px;
            padding: 0;
            margin-right: 10px;
            margin-left: 10px;
        }
    }
`;

export default function SongList() {
    const [artistDirectionDown, setArtistDirectionDown] = useState(false);
    const [titleDirectionDown, setTitleDirectionDown] = useState(false);
    const [songListObject, setSongListObject] = useState({ sortBy: "title", sortDown: true, songs: songList.songs });
    const [search, setSearch] = useState("");

    const sortSongs = (name, sortDown) => {
        let ar = songList.songs;

        if (sortDown) {
            ar.sort((a, b) => (a[name] > b[name]) ? 1 : -1)
        } else {
            ar.sort((a, b) => (a[name] < b[name]) ? 1 : -1)
        }

        name === "title" ? setTitleDirectionDown(sortDown) : setArtistDirectionDown(sortDown);
        setSongListObject({ sortBy: name, sortDown, songs: ar });
    }

    useEffect(() => {
        sortSongs("title", false);
    }, []);

    useEffect(() => {
        if (search === "") {
            setSongListObject({ ...songListObject, ...{ songs: songList.songs } });
        } else {
            const items = filterSongList(search);
            setSongListObject({ ...songListObject, ...{ songs: items } });
        }

    }, [search])

    function filterSongList(search) {
        return songList.songs.filter((data) => {
            if (data.title.toLowerCase().includes(search.toLowerCase()) || data.artist.toLowerCase().includes(search.toLowerCase())) {
                return data
            }
        });
    }

    function searchSongs(event) {
        setSearch(event.target.value);
    }

    function resetSearch() {
        setSearch("");
    }

    return (
        <>
            <div className="form-group d-flex flex-row-reverse">
                <button className="form-control btn-danger" onClick={resetSearch}>Reset Search</button>
                <input id="search-text" type="text" className="form-control px-4 mx-2" placeholder="Song / Artist" onChange={(e) => searchSongs(e)} />
                <label className="pt-2 pr-2" for="search-text">Search: </label>
            </div>

            <SongTable>
                <thead className="songs-header">
                    <tr>
                        <td >
                            Song
                        {!titleDirectionDown &&
                                <Button onClick={() => sortSongs("title", true)}>
                                    <ArrowDown />
                                </Button>
                            }
                            {titleDirectionDown &&
                                <Button onClick={() => sortSongs("title", false)}>
                                    <ArrowUp />
                                </Button>
                            }
                        </td>
                        <td>
                            Artist
                        {!artistDirectionDown &&
                                <Button onClick={() => sortSongs("artist", true)}>
                                    <ArrowDown />
                                </Button>
                            }
                            {artistDirectionDown &&
                                <Button onClick={() => sortSongs("artist", false)}>
                                    <ArrowUp />
                                </Button>
                            }
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {songListObject.songs.map((song, index) => {
                        return <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                        </tr>
                    })}
                </tbody>
            </SongTable>
        </>
    )
}