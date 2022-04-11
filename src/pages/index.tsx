import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect } from "react";

import About from "../components/about";
import Dates from "../components/dates";
import Layout from "../components/layout";
import ReactGA from 'react-ga';
import SEO from "../components/seo";
import YouTube from 'react-youtube';
import { graphql } from "gatsby";
import styled from "styled-components";
import videoList from "../../static/videos/videos";

ReactGA.initialize(process.env.GOOGLE_ID, { debug: false });

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
  const about = props.data.about;
  const dates = props.data.dates;
  const news = props.data.news;
  const siteTitle = "Rage Against The Supremes";
  const opts = {
    width: '900',
    height: '500',
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  }

  const handleVideoPlay = (id, title) => {

    ReactGA.event({
      category: 'Video',
      action: "Video Played",
      label: `${ id } : ${ title }`
    })
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
    <Layout location={props.location} title={siteTitle} dates={dates}>
      <SEO
        title="Home"
        keywords={[`rage against the supremes`, `utah bands`, `rats band`, `park city bands`, `salt lake bands`]}
      />

      <MainContainer>
        <div className="row pt-5">
          <div className="col-12 col-lg-3">
            {news && <Dates dates={news} title="News" className="news" />}
            <Dates dates={dates} title="Upcoming Shows" className="dates" />
          </div>
          <div className="col-12 col-lg-9">
            <About about={about} textClassName="col-12" imageClassName="col-12" />

          </div>
          <div className="row w-100">
            <div className="col-12 justify-content-center">
              {videoList.videos.map((video, index) => {
                return (
                  <div className="mt-2 px-5" key={index}>
                    <div className="w-100 py-3 text-center justify-content-center">
                      <YouTube onPlay={() => handleVideoPlay(video.id, video.title)} videoId={video.id} opts={opts} onReady={onReady} containerClassName="you-tube-wrapper" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </MainContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
query {
    about : mdx(frontmatter: {path: {eq: "about"}}) {
      frontmatter {
        date(formatString: "MMMM D,y")
        description
        image
        path
        title
      }
      body
    }
    dates: mdx(frontmatter: {path: {eq: "dates"}}) {
        frontmatter {
          date(formatString: "MMMM D,y")
          description
          image
          path
          title
        }
        body
      }
      news: mdx(frontmatter: {path: {eq: "news"}}) {
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