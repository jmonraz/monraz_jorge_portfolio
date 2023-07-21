import React, { useEffect, useRef } from "react";
import "./Hero.css";
import polnareffPortrait from "../../assets/img/polnareff_portrait.jpg";
import profilePicture from "../../assets/img/monraz_jorge_cropped.jpg";

const Hero = ({id}) => {

    const heroRef = useRef(null);

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
        sectionObserver.observe(heroRef.current);

        // Clean up the observer
        return () => {
            sectionObserver.unobserve(heroRef.current);
        };
    }, []);
    return (
        <section ref={heroRef} className="hero-section" id={id}>
            <div className="hero-container">
                <div className="hero-row">
                    <div className="hero-col">
                        <p className="light-grey" id="profile-intro">HEY THERE! I'M</p>
                        <div id="profile-name">
                            <p className="large-text">Jorge</p>
                            <p className="large-text">Monraz</p>
                        </div>
                        <div id="profile-description">
                            <p className="green" id="profile-position">FULL-STACK DEVELOPER</p>
                            <p className="light-grey">I am highly skilled software developer based in San Diego, CA, with a strong focus on creating exceptional digital experiences.</p>
                        </div>

                    </div>
                    <div className="hero-col">
                        <img src={profilePicture} alt="monraz_jorge" className="centered-image hero-image"></img>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default Hero;