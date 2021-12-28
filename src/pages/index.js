import * as React from "react";
import { Link, graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Index = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Home" />
            <h1>Genevieve Conty</h1>
            <p>Full-Stack Software Engineer</p>
            <button className="btn btn-success">Resume</button>
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
    }
`;