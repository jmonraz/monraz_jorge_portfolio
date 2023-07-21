import React, {useState, useEffect} from "react";
import "./NavBar.css";

const NavBar = ({children}) => {
    const [activeLink, setActiveLink] = useState("");

    const handleNavLinkClick = (event, link) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if(targetElement) {
            targetElement.scrollIntoView({behavior: "smooth"});
            setActiveLink(link);
        }
    };

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        return () => {
            sectionObserver.disconnect();
        };
    }, []);

    
    return (
        <div className="navbar-container">
            <a className="navbar-logo navbar-row" href="#home">{children}</a>
            <ul className="navbar-row">
                <li><a href="#about" onClick={handleNavLinkClick} >ABOUT</a></li>
                <li><a href="#experience" onClick={handleNavLinkClick} >EXPERIENCE</a></li>
                <li><a href="#projects" onClick={handleNavLinkClick} >PROJECTS</a></li>
                <li><a href="#contact" onClick={handleNavLinkClick} >CONTACT</a></li>
            </ul>
        </div>
    );
};

export default NavBar;


// className={activeLink === "contact" ? "active" : ""}