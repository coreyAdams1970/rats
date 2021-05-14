import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import classNames from "classnames";

interface IAboutProps {
    about: any;
    imageClassName?: string;
    textClassName?: string;
}

const About = ({ about, textClassName, imageClassName }: IAboutProps) => {
    return (
        <>
            <div className={textClassName}>
                <MDXRenderer>{about.body}</MDXRenderer>
            </div>
            <div className={classNames(imageClassName)} >
                <img src={`/${about.frontmatter.image}`} />
            </div>
        </>
    )
}

export default About;