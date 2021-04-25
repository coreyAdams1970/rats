import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout";

const About = (props) => {
    const post = props.data.mdx;
console.log(post.excerpt)
    return (
        <Layout location={props.location} title={post.frontmatter.title}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <div className="text-center w-100">
                <h1>{post.frontmatter.title}</h1>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                   <MDXRenderer>{post.body}</MDXRenderer> 
                </div>
                <div className="col-12 col-lg-6">
                    <img src={`/${post.frontmatter.image}`} />
                </div>
            </div>
        </Layout>
    )
}

export default About;

export const pageQuery = graphql`
query AboutQuery {
    mdx(frontmatter: {path: {eq: "about"}, title: {}}) {
      frontmatter {
        date(formatString: "MMMM D,y")
        description
        image
        path
        title
      }
      body
    }
  }

`;
