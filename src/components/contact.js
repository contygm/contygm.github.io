import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Contact = () => {
    const {
        site: {
            siteMetadata: { contact },
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
        <section className="row">
            {
                
                Object.entries(contact).map(([i, platform]) => {
                    console.log(i);
                    console.log(platform.icon);
                    // const image = getImage(data.file)
                    return (
                        <div className="col" key={i}>
                            <a href={platform.link} target="_blank">
                                <StaticImage
                                    className=""
                                    layout="constrained"
                                    formats={["auto", "webp", "avif"]}
                                    src={`../assets/images/${platform.icon}`}
                                    alt="icon"
                                    width={30}
                                    height={30}
                                    quality={95}
                                />
                                {platform.name}
                            </a>
                    </div>)
                })
            }
        </section>
    );
};

export default Contact;
