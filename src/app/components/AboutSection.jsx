"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaJsSquare,
  FaUniversity,
  FaGraduationCap,
  FaSchool,
  FaAward,
} from "react-icons/fa";
import { SiExpress, SiPostgresql, SiMongodb, SiUdemy } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <FaAward className="text-yellow-400 text-2xl mr-2" />,
    content: (
      <ul className="grid grid-cols-3 gap-6 mt-6 text-white">
        {[
          { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
          {
            icon: <SiExpress className="text-gray-400" />,
            label: "Express.js",
          },
          {
            icon: <SiPostgresql className="text-blue-500" />,
            label: "PostgreSQL",
          },
          { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
          {
            icon: <FaJsSquare className="text-yellow-400" />,
            label: "JavaScript",
          },
          { icon: <FaReact className="text-blue-400" />, label: "React.js" },
        ].map(({ icon, label }) => (
          <li
            key={label}
            className="flex items-center space-x-3 text-lg bg-gray-700 p-3 rounded-lg shadow-md"
          >
            {icon}
            <span>{label}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <FaGraduationCap className="text-blue-400 text-2xl mr-2" />,
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            icon: <FaUniversity className="text-blue-500" />,
            title: "Bachelor's Degree in CSE",
            subtitle: "IIIT Jabalpur",
          },
          {
            icon: <FaSchool className="text-purple-400" />,
            title: "Class 12th",
            subtitle: "Jugal Devi Saraswati Vidya Mandir, CBSE - 96.4%",
          },
          {
            icon: <FaSchool className="text-yellow-400" />,
            title: "Class 10th",
            subtitle: "Jugal Devi Saraswati Vidya Mandir, CBSE - 97.5%",
          },
        ].map(({ icon, title, subtitle }) => (
          <div
            key={title}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center space-x-4"
          >
            <div className="text-4xl">{icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <MdSecurity className="text-red-400 text-2xl mr-2" />,
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            icon: <MdSecurity className="text-red-400" />,
            title: "NPTEL Ethical Hacking",
            subtitle: "Ranked in the top 5%, awarded Silver Medal",
          },
          {
            icon: <SiUdemy className="text-blue-500" />,
            title: "C++ Programming - Udemy",
            subtitle:
              "Demonstrated proficiency in Object-Oriented Development.",
          },
        ].map(({ icon, title, subtitle }) => (
          <div
            key={title}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center space-x-4"
          >
            <div className="text-4xl">{icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
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
    <section className="text-white py-16 px-6 lg:px-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-10 items-center">
        {/* About Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* About Content */}
        <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a{" "}
            <span className="text-blue-400 font-semibold">
              Full Stack Web Developer
            </span>{" "}
            with a passion for building interactive and responsive web
            applications. I have hands-on experience with
            <span className="text-green-400 font-semibold">
              {" "}
              JavaScript, React, Node.js, Express, PostgreSQL, MongoDB, and
              more.
            </span>
            I thrive in team environments and am always eager to expand my skill
            set.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map(({ id, title, icon }) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
              >
                {icon} {title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
