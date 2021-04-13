import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";

const SlideContainer = styled.div`
  
&.slide-container {
    width: 104%;
    max-height: 600px;
    margin: auto; 

  .slick-slide {

    img {
        width: 100%;
        max-height: 600px;
        object-fit: cover;
    }
  } 
}
`;

const CustomSlide = ({ image }) => {
    return (
        <div>
            <img src={image} />
        </div>
    );
}


export default function Slideshow(props) {
    const { images, settings, wrapperClass } = props;



    return (
        <SlideContainer className={classNames("slide-container", wrapperClass)}>
            <Slider {...settings}>
                {images.map((image, index) => <CustomSlide image={image} key={index} />)}
            </Slider>
        </SlideContainer>
    )
}