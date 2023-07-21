import React, {useEffect, useRef} from "react";
import "./Contact.css";

// images
import githubIcon from "../../assets/img/github.png";
import linkedinIcon from "../../assets/img/linkedin.png";

const Contact = ({ id }) => {

    const contactRef = useRef(null);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        });
        sectionObserver.observe(contactRef.current);

        // Clean up the observer
        return () => {
            sectionObserver.unobserve(contactRef.current);
        };
    }, [contactRef.current]);
    
    return (
        <section id={id} className="contact-section" ref={contactRef}>
            <div className="contact-container">
                <div className="contact-col">
                    <div className="contact-heading">
                        <div className="contact-line" />
                        <p className="green contact-title">CONTACT ME</p>
                        <div className="contact-line" />
                    </div>
                </div>
                <div className="contact-col">
                    <div className="contact-row">
                        <div className="contact-row">
                            <p className="light-grey space">jomonraz@gmail.com</p>
                            <p className="light-grey space">(619) 488-0309</p>
                        </div>
                        <div className="contact-row">
                            <a href="https://github.com/jmonraz" target="_blank" rel="noreferrer"><img src={githubIcon} className="contact-icon" alt="github_icon" /></a>
                            <a href="https://www.linkedin.com/in/jorge-monraz-585753122/" target="_blank" rel="noreferrer"><img src={linkedinIcon} className="contact-icon" alt="linkedin_icon" /></a>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default Contact;