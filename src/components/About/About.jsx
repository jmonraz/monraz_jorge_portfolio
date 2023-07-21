import React, { useEffect, useRef } from "react";
import "./About.css";

// images
import aiImage from "../../assets/img/AI_2_png.png";

const About = ({id}) => {
    const aboutRef = useRef(null);

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
        sectionObserver.observe(aboutRef.current);

        // Clean up the observer
        return () => {
            if (aboutRef.current) {
              observer.unobserve(aboutRef.current);
            }
          };
    }, []);

    return (
        <section ref={aboutRef} className="about-section" id={id} >
            <div className="about-container" >
                <div className="about-row">
                    <div className="about-col">
                        <img src={aiImage} className="ai-image" alt="ai_image" />
                    </div>
                    <div className="about-col">
                        <div className="about-heading">
                            <p className="green about-title">ABOUT ME</p>
                            <div className="about-line" />
                        </div>

                        <div className="about-body">
                            <p className="light-grey">I'm Jorge Monraz, a dedicated software developer based in
                                San Diego, CA. With a background in system administration and coding,
                                I have gained valuable experience building and implementing
                                technologies that automate critical processes. </p>
                            <p className="light-grey">
                                I am proficient in various
                                programming languages such as <span className="light-green">Python, JavaScript, Java, C#, Dart, HTML, and CSS.</span> I also
                                have extensive experience with frameworks like <span className="light-green">React, Django, Flutter, Flask,
                                    and more. </span>
                            </p>
                            <p className="light-grey">
                                My passion lies in the intersection of AI and web development, where
                                I enjoy building applications that automate processes, enhance productivity,
                                and leverage AI to deliver intelligent solutions.
                            </p>
                            <p className="light-grey">
                                With a keen eye for detail
                                and a commitment to delivering high-quality results, I am always seeking opportunities
                                to make a meaningful impact in the software development industry.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
};

export default About;