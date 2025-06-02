import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

interface ContactEntry {
	icon: string,
	link: string,
	name: string
}

const ContactRow = () => {
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
        <section className="container has-text-centered">
            {
                Object.entries(contact).map(([i, entry]) => {
                    const platform = entry as ContactEntry;
                    return (
                        <a className="mx-1" href={platform.name === "Email" ? `mailto:${platform.link}`: platform.link} target="_blank" rel="noreferrer" title={platform.name}>
                            <span className={`icon has-text-success is-medium`}>
                                <i className={`fas fa-2x ${platform.icon}`} aria-hidden="true"></i>
                            </span>
                        </a>
                    )
                })
            }
            <p>
                <Link to="contyg-resume.pdf" className="has-text-success" target="_blank" rel="noreferrer" title="Resume">
                    Resume
                </Link>
            </p>
        </section>
    );
};

export default ContactRow;
