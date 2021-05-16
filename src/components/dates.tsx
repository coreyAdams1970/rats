import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components";
import classNames from "classnames";

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
    return (
        <DatesContainer className={classNames(className)}>
            <h3 className="pb-3">{title}</h3>
            <div>
                <MDXRenderer>{dates.body}</MDXRenderer>
            </div>
        </DatesContainer>
    )
}

export default Dates;