import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
    return (
        <div>
            <div>
                <h2>{data.markdownRemark.frontmatter.title}</h2>
                <div> {data.markdownRemark.frontmatter.description}</div>
            </div>
        </div>
    );
};
export default BlogPost;

export const BlogPostTemplateQuery = graphql`
    query BlogPostTemplateQuery($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            frontmatter {
                description
                title
                image
            }
        }
    }
`;
