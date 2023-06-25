import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import classNames from "classnames";

interface IAboutProps {
    about: any;
    imageClassName?: string;
    textClassName?: string;
}


const About = ({ about, textClassName, imageClassName }: IAboutProps) => {
    return (
        <div className="row">
            <div className={textClassName}>
                <MDXRenderer>{about.body}</MDXRenderer>
            </div>
           
        </div>
    )
}

export default About;