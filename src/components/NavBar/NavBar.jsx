import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = ({ children }) => {
    const [activeLink, setActiveLink] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavLinkClick = (event, link) => {
        console.log(activeLink);
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setActiveLink(link);
            setMobileMenuOpen(false); // Close the mobile menu after clicking a link
        }
    };

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        });

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        return () => {
            sectionObserver.disconnect();
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <div className="navbar-container">
            <a className="navbar-logo navbar-row" href="#home">
                {children}
            </a>
            <div className={`mobile-menu-icon ${mobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`navbar-row ${mobileMenuOpen ? "show-mobile-menu" : ""}`}>
                <li>
                    <a href="#about" onClick={(e) => handleNavLinkClick(e, "about")}>
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#experience" onClick={(e) => handleNavLinkClick(e, "experience")}>
                        EXPERIENCE
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={(e) => handleNavLinkClick(e, "projects")}>
                        PROJECTS
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={(e) => handleNavLinkClick(e, "contact")}>
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;