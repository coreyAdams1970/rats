import React from "react";
import SongList from "../components/songlist";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import styled from "styled-components";

const SongContainer = styled.div`
    padding-left: 80px;
    padding-right: 80px;
`;

const Songs = (props) => {
    return (
        <Layout location={props.location} title={"contact Us"}>
            <PageHeader title="Song List" />
            <SongContainer className="row">
                <SongList />
            </SongContainer>
        </Layout>
    )

}

export default Songs;