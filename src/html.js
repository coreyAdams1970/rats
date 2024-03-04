import PropTypes from "prop-types";
import React from "react";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-C67R4TN00K"
                ></script>

                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    type="application/opensearchdescription+xml"
                    rel="search"
                    href="opensearch.xml"
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
                <script src="netlifyauth.js"></script>
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
