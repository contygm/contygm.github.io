import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";

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
        <section className="row">
            {
                
                Object.entries(contact).map(([i, platform]) => {
                    console.log(icons);
                    console.log(platform.icon);
                    const imgData = icons.find((entry) => entry.name === platform.icon);
                    const img = getImage(imgData.childImageSharp)
                    // TODO: move images to static folder
                    // const imageThing = getImage(image);
                    // const imageSrc = `../assets/images/${platform.icon}`;
                    return (
                        <div className="col" key={i}>
                            <a href={platform.link} target="_blank">
                                {/* <StaticImage
                                    className=""
                                    layout="constrained"
                                    formats={["auto", "webp", "avif"]}
                                    src={imageSrc}
                                    alt="icon"
                                    width={30}
                                    height={30}
                                    quality={95}
                                /> */}
                                <GatsbyImage image={img} alt="ALT"/>
                                {platform.name}
                            </a>
                    </div>)
                })
            }
        </section>
    );
};

export default Contact;
