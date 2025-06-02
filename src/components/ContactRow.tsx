import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
        <section className="row contact-row">
            {
                Object.entries(contact).map(([i, entry]) => {
					const platform = entry as ContactEntry;
                    return (
                        <div className="col" key={i}>
                            <a href={platform.name === "Email" ? `mailto:${platform.link}`: platform.link} target="_blank" rel="noreferrer" title={platform.name}>
								<span className={`icon has-text-success`}>
									<i className={`fas ${platform.icon}`} aria-hidden="true"></i>
								</span>
								{platform.name}
                            </a>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default ContactRow;
