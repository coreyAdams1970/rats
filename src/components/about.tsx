import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import classNames from "classnames";
import styled from "styled-components";

interface IAboutProps {
    about: any;
    imageClassName?: string;
    textClassName?: string;
}

const AboutContainer = styled.div`
    
`;


const About = ({ about, textClassName, imageClassName }: IAboutProps) => {
    return (
        <AboutContainer className="row">
            <div className={textClassName}>
                <MDXRenderer>{about.body}</MDXRenderer>
            </div>
            <div className={classNames(imageClassName)} >
                <img src={`/${about.frontmatter.image}`} />
            </div>
        </AboutContainer>
    )
}

export default About;