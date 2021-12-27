import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;
    let header;
    let containerClass;

    if (isRootPath) {
        containerClass = "d-flex flex-column min-vh-100 justify-content-center align-items-center";
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        );
    } else {
        containerClass = '"container';
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        );
    }

    return (
        <div data-is-root-path={isRootPath}>
            {/* <header className="global-header">{header}</header>
            
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer> */}
            
            <main className={containerClass}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
