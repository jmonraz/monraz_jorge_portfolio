import React, { useEffect, useRef } from "react";
import "./Experience.css";

// images
import techImage from "../../assets/img/technologies_png.png";

// pdf
import resume from "../../assets/pdf/MonrazJorgeResume2023.pdf";

const Experience = ({ id }) => {

    const experienceRef = useRef(null);

    useEffect(() => {
        let ref = experienceRef.current;
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        });
        sectionObserver.observe(ref);

        // Clean up the observer
        return () => {
            if (ref) {
              sectionObserver.unobserve(ref);
            }
          };
    }, []);

    const handleResumeButtonClick = () => {
        window.open(resume, "_blank");
    };

    return (
        <section id={id} className="experience-section" ref={experienceRef}>
            <div className="experience-container">
                <div className="experience-row">
                    <div className="experience-col">
                        <div className="experience-heading">
                            <div className="experience-line" />
                            <p className="green experience-title">EXPERIENCE</p>
                        </div>
                        <div className="experience-body">
                            <p className="light-grey">
                                As a Systems Administrator at 3PLWINNER, I successfully designed and implemented network environments,
                                managed users through Active Directory, created comprehensive technical documentation, troubleshooted software and hardware,
                                collaborated with developers to enhance applications, and developed web and mobile apps to optimize productivity and streamline processes.
                            </p>
                            <p className="light-grey">

                                I have developed several applications and tools for 3PLWINNER, including a shipping calculator that integrates with Fedex, UPS, USPS,
                                and DHL APIs to provide real-time shipping rates based on user input. Additionally, I created an Android visitor check-in application
                                that utilizes Firebase Firestore for storing visitor information and capturing images within the app. Furthermore, I implemented a custom
                                report generator using Flask and Python with Pandas for data manipulation and analytics, resulting in insightful and accurate reports.
                            </p>
                            <p className="light-grey">

                                I hold an Associate's degree in Computer Science and I am currently pursuing a Bachelor's degree in Computer Science with a concentration in AI 
                                from Full Sail University. My educational background has equipped me with a strong foundation in programming methodologies, extensive knowledge 
                                of algorithms, and proficiency in multiple programming languages.
                            </p>
                        </div>
                        <button className="main-button" onClick={handleResumeButtonClick}>RESUME</button>
                    </div>
                    <div className="experience-col">
                        <img src={techImage} className="tech-image" alt="tech_image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;