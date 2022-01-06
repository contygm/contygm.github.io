import * as React from "react";

const Layout = ({ location, title, children, icons}) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const projectPath = `${__PATH_PREFIX__}/projects`;
    const isRootPath = location.pathname === rootPath;
    const containerClass = "d-flex flex-column min-vh-100 justify-content-center align-items-center";

    return (
        <div data-is-root-path={isRootPath} data-theme={'dark'} className="global-wrapper">
            {/* 
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
