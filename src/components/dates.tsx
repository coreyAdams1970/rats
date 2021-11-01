import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components";
import classNames from "classnames";
import ReactYouTube from "./reactYouTube";
import ReactVimeo from "./reactVimeo";
import { rhythm, scale } from "../utils/typography";
import { MDXProvider } from "@mdx-js/react";

const DatesContainer = styled.div`
    .dates {
        font-size: 10px;
    }

    .news {
        font-size:12px;
    }
`;

interface IDateProps {
    dates: any;
    className?: string;
    title: string;
}

const Dates = ({ dates, className, title }: IDateProps) => {

    const Shortcodes = { ReactYouTube, ReactVimeo };

    return (
        <DatesContainer className={classNames(className)}>
            <h3 className="pb-3">{title}</h3>
            <div>
                <MDXProvider components={{ ...Shortcodes }}>
                    <MDXRenderer>{dates.body}</MDXRenderer>
                </MDXProvider>
            </div>
        </DatesContainer>
    )
}

export default Dates;