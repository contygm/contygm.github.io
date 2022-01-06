
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Projects = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title;

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="Projects" />
			Projects page
		</Layout>
	);
};

export default Projects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`