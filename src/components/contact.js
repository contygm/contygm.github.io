import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Contact = ({icons}) => {
    const {
        site: {
            siteMetadata: { 
                contact 
            },
        },
    } = useStaticQuery(graphql`
    query ContactQuery {
        site {
            siteMetadata {
                contact {
                    icon
                    link
                    name
                }
            }
        }
    }`);

    return (
        <section className="row contact-row">
            {
                Object.entries(contact).map(([i, platform]) => {
                    const imgData = icons.find((entry) => entry.name === platform.icon);
                    const img = getImage(imgData.childImageSharp)
                    // TODO email link needs maito to
                    return (
                        <div className="col" key={i}>
                            <a href={platform.link} target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title={platform.name}>
                                <GatsbyImage image={img} alt={platform.icon}/>
                            </a>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default Contact;
