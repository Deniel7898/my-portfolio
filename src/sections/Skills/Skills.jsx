    import React from "react";
    import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiBootstrap,
    SiReact,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiGit,
    SiGithub,
    SiChatbot,
    } from "react-icons/si";
    import { VscVscode, VscTools } from "react-icons/vsc";
    import { FaDocker } from "react-icons/fa";

    import "./Skills.css";

    const Skills = () => {
    const categories = [
        {
        title: "Frontend",
        skills: [
            { icon: <SiHtml5 />, name: "HTML" },
            { icon: <SiCss3 />, name: "CSS" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <SiBootstrap />, name: "Bootstrap" },
            { icon: <SiReact />, name: "React" },
        ],
        },
        {
        title: "Backend",
        skills: [{ icon: <SiPhp />, name: "PHP" }],
        },
        {
        title: "Frameworks",
        skills: [{ icon: <SiLaravel />, name: "Laravel" }],
        },
        {
        title: "Database",
        skills: [{ icon: <SiMysql />, name: "MySQL" }],
        },
        {
        title: "Version Control",
        skills: [
            { icon: <SiGit />, name: "Git" },
            { icon: <SiGithub />, name: "GitHub" },
        ],
        },
        {
        title: "Tools",
        skills: [
            { icon: <VscVscode />, name: "VS Code" },
            { icon: <VscTools />, name: "Laragon" },
            { icon: <FaDocker />, name: "Docker" },
            { icon: <SiChatbot />, name: "ChatGPT" },
        ],
        },
    ];

    return (
        <section id="skills" className="skills-container">
        <h2 className="skills-title">My Skills & Tools</h2>

        <div className="skills-wrapper">
            {categories.map((cat, index) => (
            <div className="skill-category-card" key={index}>
                <h3>{cat.title}</h3>
                <div className="skill-items">
                {cat.skills.map((skill, i) => (
                    <div className="skill-item" key={i}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </section>
    );
    };

    export default Skills;
