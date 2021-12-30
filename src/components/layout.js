import * as React from "react";
import useLocalStorage from "use-local-storage";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Layout = ({ location, title, children, icons}) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const blogPath = `${__PATH_PREFIX__}/blog/`;
    const isNotBlog = location.pathname !== blogPath;
    const isRootPath = location.pathname === rootPath;
    
    // toggle theme
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', (defaultDark ? 'dark' : 'light'));
    const themeToggler = () => {
        theme === 'light' ? 
            setTheme('dark') : 
            setTheme('light');
    }

    let containerClass;

    if (isNotBlog) {
        containerClass = "d-flex flex-column min-vh-100 justify-content-center align-items-center";
    } else {
        containerClass = "container";
    }

    if (isRootPath) {
        // get correct theme icon
        const themeIcon = theme === "light" ? `black-moon` : `white-sun`;
        const imgData = icons.find((entry) => entry.name === themeIcon);
        const img = getImage(imgData.childImageSharp);
        
        return (
            <div data-is-root-path={isRootPath} data-theme={theme} className="global-wrapper ">
                <div className="d-flex flex-row-reverse">
                    <button className="btn " onClick={themeToggler}>
                        <GatsbyImage image={img} alt={themeIcon}/>
                    </button>
                </div>
                
                <main className={containerClass}>
                    {children}
                </main>
            </div>
        );
    } 

    return (
        <div data-is-root-path={isRootPath} data-theme={theme} className="global-wrapper">
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
