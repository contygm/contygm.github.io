import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {
    const data = useStaticQuery(graphql`
        query ContactQuery {
            site {
                siteMetadata {
                    contact {
                        linkedin
                        email
                        github
                    }
                }
            }
        }
    `);

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const contact = data.site.siteMetadata?.contact;

    return (
        <div className="">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../assets/images/gatsby-icon.png"
                width={30}
                height={30}
                quality={95}
                alt="icon"
            />

        <a href={contact?.linkedin || ""} target="_blank">
            LinkedIn
        </a>
        <a href={`mailto:${contact?.email || ``}`}>
            Email
        </a>
        <a href={contact?.github || ""} target="_blank">
            Github
        </a>
        </div>
    );
};

export default Contact;
