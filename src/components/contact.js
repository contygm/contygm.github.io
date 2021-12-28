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
            <div className="">
                <ul className="row no-bullets">
                    <li className="col">
                        <a href={contact?.linkedin || ""} target="_blank">
                            <StaticImage
                                className=""
                                layout="constrained"
                                formats={["auto", "webp", "avif"]}
                                src="../assets/images/linkedin-green.png"
                                alt="icon"
                                width={30}
                                height={30}
                                quality={95}
                            />
                            LinkedIn
                        </a>
                    </li>
                    <li className="col">
                        <a href={`mailto:${contact?.email || ``}`}>
                            <StaticImage
                                className=""
                                layout="constrained"
                                formats={["auto", "webp", "avif"]}
                                src="../assets/images/email-green.png"
                                alt="icon"
                                width={30}
                                height={30}
                                quality={95}
                            />
                            Email
                        </a>
                    </li>
                    <li className="col">
                        <a href={contact?.github || ""} target="_blank">
                            <StaticImage
                                className=""
                                layout="constrained"
                                formats={["auto", "webp", "avif"]}
                                src="../assets/images/github-green.png"
                                alt="icon"
                                width={30}
                                height={30}
                                quality={95}
                            />
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
