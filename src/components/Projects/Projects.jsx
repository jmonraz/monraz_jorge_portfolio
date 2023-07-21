import React, { useEffect, useRef } from "react";
import "./Projects.css";

const Projects = ({ id }) => {

    const projectsRef = useRef(null);

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
        sectionObserver.observe(projectsRef.current);

        // Clean up the observer
        return () => {
            sectionObserver.unobserve(projectsRef.current);
        };
    }, []);

    return (
        <section id={id} className="projects-section" ref={projectsRef}>
            <div className="projects-container">
                <div className="projects-row">
                    <div className="projects-col">

                    </div>
                    <div className="projects-col">
                        <div className="projects-heading">
                            <p className="green projects-title">PROJECTS</p>
                            <div className="projects-line" />
                        </div>
                    </div>

                </div>
                <div className="projects-row">
                    <div className="projects-sub-col">
                        <p className="green app-text">MEDIPRED</p>
                    </div>
                    <div className="projects-sub-col">
                        <p className="light-grey normal-text light-margin">Medipred - a healthcare management system is a robust software application developed using a combination of
                         <span className="light-green"> React, Django, PostgreSQL, 
                            and a custom-built machine learning model.</span> It empowers users to efficiently manage patient information while providing valuable health 
                            analysis predictions. With this system, users can accurately assess the risk of developing conditions like diabetes, heart disease, and more. 
                            The integration of cutting-edge technologies and intuitive user interfaces ensures a seamless and comprehensive healthcare management experience.</p>
                            <a className="a-button top-space" href="https://github.com/jmonraz/medipred" target="_blank" rel="noreferrer">REPOSITORY</a>
                    </div>
                </div>
                <div className="projects-row">
                    <div className="projects-sub-col">
                        <p className="light-grey normal-text light-margin">Report Comparer - a powerful application developed using <span className="light-green">Flask, Python, and Pandas</span> to compare 
                        and consolidate two reports based on 
                            specific conditions. This innovative tool was specifically designed to compare a shipping invoice with a Warehouse Management System (WMS) 
                            invoice, enabling users to identify and address any discrepancies in shipping costs. By leveraging advanced data manipulation and cleansing 
                            techniques, Report Comparer ensures accurate and efficient analysis, preventing financial losses and enhancing cost optimization.</p>
                            <a className="a-button top-space" href="https://github.com/jmonraz/report_comparer" target="_blank" rel="noreferrer">REPOSITORY</a>
                    </div>
                    <div className="projects-sub-col">
                        <p className="green app-text">REPORT COMPARER</p>
                    </div>
                </div>
                <div className="projects-row">
                    <div className="projects-sub-col">
                        <p className="green app-text">AEGIS</p>
                    </div>
                    <div className="projects-sub-col">
                        <p className="light-grey normal-text light-margin">Aegis IMS - a robust inventory management system built with <span className="light-green">Java, Gradle, and Firebase.</span> Designed to cater to the needs of both 
                            small and large-scale users, this comprehensive solution empowers businesses to effectively track inventory, 
                            manage outbound and inbound orders, and optimize their warehouse operations. By leveraging advanced algorithms, 
                            Aegis IMS offers enhanced features like sorting and put-away, enabling users to streamline their inventory processes 
                            and maximize efficiency.</p>
                            <a className="a-button top-space" href="https://github.com/jmonraz/InventoryManagementSystem" target="_blank" rel="noreferrer">REPOSITORY</a>
                    </div>
                </div>
                <div className="projects-row">
                    <div className="projects-sub-col">
                        <p className="light-grey normal-text light-margin">The Visitor Check-in - is a powerful tool developed for Android using <span className="light-green">Java, Gradle, and Firebase. </span>
                            With its intuitive interface and seamless integration with the device's front camera, this application 
                            allows users to capture visitor photos and store them securely in Firebase Storage. By implementing this feature, 
                            the application enables efficient tracking of individuals entering the facility. Additionally, the application sends 
                            automated email notifications upon check-in and check-out, providing management with real-time updates on visitor activities.</p>
                            <a className="a-button top-space" href="https://github.com/jmonraz/3PLWINNER.Visitor.Check.In.App" target="_blank" rel="noreferrer">REPOSITORY</a>
                    </div>
                    <div className="projects-sub-col">
                        <p className="green app-text">VISITOR CHECK IN</p>
                    </div>
                </div>
                <div className="projects-row">
                    <a className="check-repos" href="https://github.com/jmonraz?tab=repositories" target="_blank" rel="noreferrer">Check More Repos</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;