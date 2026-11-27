import { StaticImageData } from "next/image";
import chatbot from "@/public/quicktalk.png";
import eventplanner from "@/public/eventplanner.png";
import una from "@/public/una.png";
import mernstack from "@/public/mernstack.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const profile = {
  name: "Hamza Nawaz",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, reliable web apps and AI chatbots end to end — and I'm now studying Data Science in Milan to make them smarter.",
  location: "Pakistan · Milan, Italy",
  email: "hamza.nawaz.malik450@gmail.com",
  linkedin: "https://www.linkedin.com/in/hamza-nawaz-8b7204282/",
  cv: "/CV.pdf",
  rotatingWords: ["web apps", "AI chatbots", "data-driven products"],
  stats: [
    { value: "3+", label: "Years building for the web" },
    { value: "4", label: "Featured products shipped" },
    { value: "MSc", label: "Data Science, Milano-Bicocca" },
  ],
};

export const quickFacts = [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Based in", value: "Pakistan · Milan, Italy" },
  { label: "Education", value: "MSc Data Science, University of Milano-Bicocca" },
  { label: "Focus", value: "React, Next.js, Node.js, AI chatbots" },
  { label: "Open to", value: "Full-time & freelance roles" },
] as const;

export type ExperienceItem = {
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
};

export const experiencesData: readonly ExperienceItem[] = [
  {
    type: "education",
    title: "MSc Data Science",
    organization: "University of Milano-Bicocca",
    location: "Milan, Italy",
    date: "2026 – Present",
    description:
      "Graduate studies in data management, data visualization, probability and statistics, and machine learning.",
  },
  {
    type: "work",
    title: "Full-Stack & Chatbot Developer",
    organization: "Najoomi Technologies",
    location: "Islamabad, Pakistan",
    date: "2024 – Present",
    description:
      "Building web applications and AI chatbots with React, Next.js, TypeScript, Tailwind CSS, Prisma, MongoDB, Pinecone and Flask.",
  },
  {
    type: "work",
    title: "WordPress Developer",
    organization: "Fair Deals",
    location: "Islamabad, Pakistan",
    date: "Nov 2023 – Jan 2024",
    description:
      "Developed a WordPress website with property-management plugins for Fair Deals F-11 Markaz and managed property payment records.",
  },
  {
    type: "work",
    title: "Software Developer",
    organization: "IGATE Technologies",
    location: "Islamabad, Pakistan",
    date: "Jul 2023 – Aug 2023",
    description:
      "Worked with HTML, CSS, JavaScript and React.js, built a website clone, and collaborated with a front-end developer on a WordPress site.",
  },
];

export type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: StaticImageData;
};

export const projectsData: readonly ProjectData[] = [
  {
    title: "AI Chatbot",
    description:
      "Full-stack development of a startup chatbot that answers questions using retrieval over a vector database.",
    tags: ["React", "Next.js", "MongoDB", "Pinecone", "Flask", "Tailwind"],
    imageUrl: chatbot,
  },
  {
    title: "Event Planner Web App (Final Year Project)",
    description:
      "Event-planning platform built with Next.js 13 and MongoDB, featuring virtual venue tours and real-time notifications.",
    tags: ["React", "Next.js", "MongoDB", "Redux", "Tailwind"],
    imageUrl: eventplanner,
  },
  {
    title: "Una Services Website",
    description:
      "Business website built on WordPress with agent catalogues to help visitors find the right service quickly.",
    tags: ["WordPress", "PHP", "HTML", "CSS"],
    imageUrl: una,
  },
  {
    title: "Personal Learning Platform",
    description:
      "MERN-stack learning website with an admin panel for managing courses and content.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Context API"],
    imageUrl: mernstack,
  },
];

export const skillsData = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Context API", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Flask", "Prisma", "REST APIs", "WordPress"],
  },
  {
    category: "Databases & AI",
    items: ["MongoDB", "PostgreSQL", "Pinecone", "Vector databases", "Chatbots"],
  },
  {
    category: "Data Science (MSc)",
    items: ["Python", "Statistics", "Data visualization", "Machine learning"],
  },
] as const;
