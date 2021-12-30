import * as React from "react";
import { graphql } from "gatsby";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Index = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title;
    const icons = data.allFile.nodes;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Portfolio" />
            <h1>Genevieve Conty</h1>
            <p>Full-Stack Software Engineer</p>
            <Contact icons={icons}/>
            {/* TODO make btn the correct green */}
            <a href="/resume.pdf" className="resume-button" target="_blank">Resume</a>
        </Layout>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
              title
            }
        }
        allFile(
            sort: {fields: name, order: DESC},
            filter: {relativeDirectory: {in: "icons"}}
        ) {
            totalCount
            nodes {
                name
                childImageSharp {
                    gatsbyImageData(
                        width: 30
                        height: 30
                        placeholder: BLURRED
                        layout: CONSTRAINED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    }
`;