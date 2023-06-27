import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
    if (data && data.markdownRemark) {
        return (
            <div>
                <div>
                    <h2>{data.markdownRemark.frontmatter.title}</h2>
                    <div> {data.markdownRemark.frontmatter.description}</div>
                </div>
            </div>
        );
    }
    return "";
};
export default BlogPost;

export const BlogPostTemplateQuery = graphql`
    query BlogPostTemplateQuery {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;
