import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components";

const DatesContainer = styled.div`
    p{
        font-size: 10px;
    }
`;

const Dates = ({ dates, className, title }) => {
    return (
        <DatesContainer className={className}>
                <h3 className="pb-3">{title}</h3>
            <div>
                <MDXRenderer>{dates.body}</MDXRenderer>
            </div>
        </DatesContainer>
    )
}

export default Dates;