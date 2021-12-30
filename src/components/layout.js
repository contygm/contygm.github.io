import * as React from "react";
import useLocalStorage from "use-local-storage";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Layout = ({ location, title, children, icons}) => {
    // const blogPath = `${__PATH_PREFIX__}/blog`;
    // const isBlog = location.pathname === blogPath;
    

    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath || location.pathname === `${__PATH_PREFIX__}/404`;
    
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', (defaultDark ? 'dark' : 'light'));
    
    
    const themeToggler = () => {
        theme === 'light' ? 
            setTheme('dark') : 
            setTheme('light');
        console.log("now it's", theme)
        
    }

    const themeIcon = theme === "light" ? `black-moon` : `white-sun`;

    console.log(icons, themeIcon)
    const imgData = icons.find((entry) => entry.name === themeIcon);
    console.log(imgData)
    const img = getImage(imgData.childImageSharp);

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
            <button className="btn float-end" onClick={themeToggler}>
                <GatsbyImage image={img} alt={themeIcon}/>
            </button>
            <main className={containerClass}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
