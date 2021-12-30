import * as React from "react";
import useLocalStorage from "use-local-storage";
// import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath || location.pathname === `${__PATH_PREFIX__}/404`;

    const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [theme, setTheme] = useLocalStorage('theme', (defaultDark ? 'dark' : 'light'));
    const themeToggler = () => {
        console.log("toggle")
        theme === 'light' ? 
            setTheme('dark') : 
            setTheme('light');
        console.log("now it's", theme)
    }

    let containerClass;

    if (isRootPath) {
        containerClass = "d-flex flex-column min-vh-100 justify-content-center align-items-center";
    } else {
        containerClass = "container";
    }

    return (
        <div data-is-root-path={isRootPath} data-theme={theme} className="global-wrapper">
            {/* 
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer> */}
            <button className="btn btn-primary" onClick={themeToggler}>Theme</button>
            <main className={containerClass}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
