import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
// import ReactGA from 'react-ga';
import Slideshow from "../components/slideshow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from 'react-youtube';

//ReactGA.initialize('G-GQ7PW6FH0Z');

const images = [
  "images/1.png",
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg",
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  lazyLoad: true,
  autoplaySpeed: 5000,
  speed: 3000,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slick-slider-fade',
};

const MainContainer = styled.div`
  
  position:relative;
  top: -200px;

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

  const siteTitle = "Rage Against The Supremes";
  const videoId = "sEy4_hRjuqc";
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  // useEffect(() => {
  //   if (typeof "window" !== "undefined") {
  //     ReactGA.pageview(window.location.pathname + window.location.search);
  //   }
  // }, []);

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`rage against the supremes`,`utah bands`, `rats band`, `park city bands`, `salt lake bands`]}
      />

      <MainContainer>
        <div className="row w-100">
          <div className="col-12 px-0 pb-3 slider-main-container">
            <Slideshow wrapperClass="images-slider" images={images} settings={settings} key="image-slider" />
          </div>
        </div>
        <div className="row main-text mt-5 px-2">
          <div className="col-12 col-lg-6 px-5">
            <div className="col-12">
              <h3 className="text-center pb-1">Welcome to RATS Band</h3>
            </div>
            {/* <div className="row main-text">
              <div className="col-12">
                <p>Kick It Up A Notch! Alpine Designs and Desert Designs were grown out of the desire to create outdoor living spaces that not only meet the needs and dreams of our clients but to exceed them while incorporating the surrounding beauty of Mother Nature.
              </p>
                <p>We will incorporate  your families personality and style into the design.  Your property should be a reflection of you providing family memories for years to come.
              <br />Our experienced team prides ourselves on customer service, design innovation and old school business practices.
              </p>
                <p>Kick it Up A Notch! Desert Designs has 14 years of experience with custom home builders and high-end residential remodels in Scottsdale Arizona.
              </p><p>
                  We look forward to bringing our innovation and creativity to the Wasatch and Salt Lake Valley.
              </p>
              </div>
            </div>*/}
          </div> 
          <div className="col-12 col-lg-6 py-3 text-center">
            <YouTube videoId={videoId} opts={opts} onReady={onReady} containerClassName="you-tube-wrapper"/>
          </div>
        </div>
      </MainContainer>
    </Layout>
  )
}
