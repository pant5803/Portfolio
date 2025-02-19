"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "Portfolio Website — A personal web portfolio showcasing projects, skills, and achievements. Built with modern web technologies to create a responsive, interactive, and visually appealing experience. Designed to highlight expertise in full-stack development and problem-solving.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pant5803/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tuneflow",
    description:
      "Music Streaming Platform — A full-featured music streaming web app allowing users to create personal playlists and receive song recommendations. Integrated a unique in-app chat for real-time messaging with online friends.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pant5803/TuneFlow",
    previewUrl: "https://tuneflow-1.onrender.com/",
  },
  {
    id: 3,
    title: "CodeSync",
    description:
      "Interview Video Calling Platform — Built and deployed a full-stack web app for seamless video calls between interviewers and candidates. Developed an in-browser code compiler, allowing candidates to write code in 4+ languages during interviews. Added multiple features for creating, joining, scheduling, and recording interviews, streamlining the technical hiring process.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pant5803/codeSync",
    previewUrl: "https://code-sync-five-mu.vercel.app/",
  },
  {
    id: 4,
    title: "Code-Craft",
    description:
      "Web-Based Code Editor — Implemented and deployed a web-based code editor with multi-language support and real-time code execution. Integrated syntax highlighting, autocompletion, error detection, customizable themes, and Snippets management for a seamless coding experience.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pant5803/codecraft",
    previewUrl: "https://code-craft-gules.vercel.app/",
  },
  {
    id: 5,
    title: "Pokedex",
    description:
      "Pokémon Explorer Web App — Integrated 1,500+ Pokémon records via API, allowing kids to explore, search, and compare different Pokémon. Enhanced user engagement with interactive search, filtering, and comparison tools. Added Google Login and Signup for seamless authentication, enabling personalized Pokémon collections.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pant5803/pokedex",
    previewUrl: "https://chimerical-salmiakki-43763f.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
