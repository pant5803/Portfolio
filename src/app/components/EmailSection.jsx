"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/pant5803">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/toshit-pant-938b0a256/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

        <div>
          {/* Phone Number */}
          <motion.div
            className="flex items-center space-x-4 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }} // Bounce effect
          >
            <motion.div
              className="text-blue-500 text-6xl"
              animate={{
                scale: [1, 1.2, 1],
                textShadow: [
                  "0px 0px 0px #3b82f6",
                  "0px 0px 10px #3b82f6",
                  "0px 0px 0px #3b82f6",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaPhoneAlt />
            </motion.div>
            <motion.span
              className="text-2xl"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              +91-9839023884
            </motion.span>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }} // Bounce effect with delay
          >
            <motion.div
              className="text-red-500 text-6xl"
              animate={{
                scale: [1, 1.2, 1],
                textShadow: [
                  "0px 0px 0px #ef4444",
                  "0px 0px 10px #ef4444",
                  "0px 0px 0px #ef4444",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaEnvelope />
            </motion.div>
            <motion.span
              className="text-2xl"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              toshitpant0808@gmail.com
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
