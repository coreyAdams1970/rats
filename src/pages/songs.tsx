import React from "react";
import SongList from "../components/songlist";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import styled from "styled-components";
import ReactGA from "react-ga";

ReactGA.initialize(process.env.GOOGLE_ID);

const SongContainer = styled.div`
    padding-left: 80px;
    padding-right: 80px;

    @media(max-width:750px){
        padding-left: 20px;
        padding-right: 20px;
    }
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