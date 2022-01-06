import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        image
                        siteUrl
                        social {
                            twitter
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;
    const logoUrl = `${site.siteMetadata.siteUrl}${site.siteMetadata.imagel}`;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title || "GC"}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : `${defaultTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                }
                ,
                {
                    property: `og:image`,
                    content: logoUrl,
                }
            ].concat(meta)}
        />
    );
};

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default Seo;
