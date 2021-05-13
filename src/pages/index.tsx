import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import ReactGA from 'react-ga';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from 'react-youtube';
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"

ReactGA.initialize(process.env.GOOGLE_ID, { debug: true });

const MainContainer = styled.div`
  .main-text {
    text-align: justify;
    background-color: white;
    line-height: 26px;
    padding-top:10px;

    h3 {
      margin-top: 20px;
      border-bottom: 1px solid #face11;
    }
  } 

  .you-tube-wrapper{
     padding-left:20px;
     padding-right:20px; 
  }

  @media(max-width:700px){
    .you-tube-wrapper {
      iframe{
        width:100%;
      }
    }
  }

  @media(max-width:500px){
    .main-text{
      padding: 10px;
    }
  }

  .slider-main-container {
    position: relative;
    top: 0;
  }

`;

export default function IndexPage(props) {
  const post = props.data.mdx;
  const siteTitle = "Rage Against The Supremes";
  const videoId = "sEy4_hRjuqc";
  const opts = {
    width: '800',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);

      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-4G7LKPFTXH');
    }
  }, []);

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`rage against the supremes`, `utah bands`, `rats band`, `park city bands`, `salt lake bands`]}
      />

      <MainContainer>
        <div className="row main-text mt-5 px-2">
          <div className="col-12 col-lg-6 px-5">
            <div className="col-12">
              <h3 className="text-center pb-1">Welcome to RATS Band</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          <div className="col-12 col-lg-6">
            <img src={`/${post.frontmatter.image}`} />
          </div>
        </div>
        <div className="row mt-5 px-2">

          <div className="col-12 py-3 text-center justify-content-center">
            <YouTube videoId={videoId} opts={opts} onReady={onReady} containerClassName="you-tube-wrapper" />
          </div>
        </div>
      </MainContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
query MainQuery {
    mdx(frontmatter: {path: {eq: "about"}, title: {}}) {
      frontmatter {
        date(formatString: "MMMM D,y")
        description
        image
        path
        title
      }
      body
    }
  }

`;