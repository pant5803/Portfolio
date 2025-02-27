"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaAward, FaGraduationCap, FaShieldAlt } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDb</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor's Degree in Computer Science Engineering - Indian Institute
          of Information Technology Jabalpur
        </li>
        <li>
          Class 12th - Jugal Devi Saraswati Vidya Mandir Senior Secondary School
          (CBSE Board) - Secured 96.4%
        </li>
        <li>
          Class 10th - Jugal Devi Saraswati Vidya Mandir Senior Secondary School
          (CBSE Board) - Secured 97.5%
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Ranked among the top 5% in the NPTEL Ethical Hacking course and was
          awarded a Silver Medal.
        </li>
        <li>
          Earned C++ Programming certification from Udemy, showcasing
          proficiency in object-oriented development.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with{" "}
            <span className="text-base lg:text-lg font-bold italic font-[Poppins]">
              JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
              HTML, CSS, and Git
            </span>
            . I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              <FaShieldAlt color="#FF6666" size={20} />
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              <FaGraduationCap color="blue" size={30} />
              Education
              {"  "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              <FaAward color="gold" size={25} />
              Certifications
              {"  "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
