import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chatbot from "@/public/chatbot.png"
import eventplanner from "@/public/eventplanner.png"
import una from "@/public/una.png"
import mernstack from "@/public/mernstack.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "I9/Islamabad(IGATE technlogoies)",
    description:
      "Gained skills in HTML, CSS, JavaScript, and React.js, creating a website clone during July-August 2023 in Islamabad, PK. Collaborated with a front-end developer to build a WordPress site and fostered cross-department teamwork to achieve project goals.",
      icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Aug 2023 ",
  },
  {
    title: "Wordpress Developer",
    location: "F11/Islamabad(Fair Deaqls)",
    description:
      "Developed a WordPress website with property management plugins for Fair Deals F11 Markaz and managed property payments using Excel spreadsheets. ",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Jan 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "H9 NIC(Najoomi Technologies)",
    description:
      "I'm now a full-stack developer working here and also chatbot developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, MongoDB, Pinecone, Flask. I'm open to full-time opportunities.",
      icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chatbot",
    description:
      "I worked as a full-stack developer on this startup project for 2 month.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Pinecone", "Flask"],
    imageUrl: chatbot,
  },
  {
    title: "Event Planner Web Application (FYP)",
    description:
      "Developed and deployed with Next.js 13 and MongoDB, along with features like virtual venue tours and real-time notifications.",
    tags: ["React", "Next.js", "Mongodb", "Tailwind", "Redux"],
    imageUrl: eventplanner,
  },
  {
    title: "Una services Website",
    description:
      "Developed and deployed using HTML, CSS, and WordPress, The application also included agent catalogs to enhance user experience.",
    tags: ["HTML", "CSS", "PHP", "Wordpress"],
    imageUrl: una,
  },
  {
    title: "Personal Learning Webiste",
    description:
      "Developed and deployed using Mern Stack for learning. The application also Admin panel for managment.",
      tags: ["React", "Node.js", "Mongodb", "Tailwind", "Express Js", "Context Api"],
    imageUrl: mernstack,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Context Api",
  "Pinecone",
  "Express",
  "PostgreSQL",
  "Flask",
  "Chatbot",
  "Framer Motion",
] as const;
