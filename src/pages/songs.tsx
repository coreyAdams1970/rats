import React from "react";
import SongList from "../components/songlist";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";

const Songs = (props) => {
    return (
        <Layout location={props.location} title={"contact Us"}>
            <PageHeader title="Song List" />
            <SongList />
        </Layout>
    )

}

export default Songs;