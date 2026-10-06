export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "I build fast, accessible, and beautiful web experiences.",
  email: "mkjadoon5127@gmail.com",
  location: "Your City, Country",
  bio: "I'm a passionate developer with a love for creating elegant solutions to complex problems. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying the outdoors.",
  avatar: "/avatar.jpg", // Place your photo at public/avatar.jpg
  resume: "/resume.pdf", // Place your resume at public/resume.pdf
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST / GraphQL", level: 80 },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "AWS / Vercel", level: 70 },
      { name: "CI/CD", level: 65 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description:
      "A full-stack SaaS application that helps teams manage tasks and collaborate in real time. Built with Next.js, Prisma, and WebSockets.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
    liveUrl: "https://project-alpha.vercel.app",
    githubUrl: "https://github.com/yourusername/project-alpha",
    image: "/projects/project-alpha.png",
    featured: true,
  },
  {
    id: 2,
    title: "Project Beta",
    description:
      "An open-source CLI tool that automates repetitive dev tasks. Used by 500+ developers on GitHub.",
    tags: ["Node.js", "TypeScript", "CLI"],
    liveUrl: "",
    githubUrl: "https://github.com/yourusername/project-beta",
    image: "/projects/project-beta.png",
    featured: true,
  },
  {
    id: 3,
    title: "Project Gamma",
    description:
      "A real-time data dashboard built with React and D3.js that visualizes financial market data from public APIs.",
    tags: ["React", "D3.js", "APIs", "Recharts"],
    liveUrl: "https://project-gamma.vercel.app",
    githubUrl: "https://github.com/yourusername/project-gamma",
    image: "/projects/project-gamma.png",
    featured: false,
  },
   {
    id: 4,
    title: "Project Gamma",
    description:
      "A real-time data dashboard built with React and D3.js that visualizes financial market data from public APIs.",
    tags: ["React", "D3.js", "APIs", "Recharts"],
    liveUrl: "https://project-gamma.vercel.app",
    githubUrl: "https://github.com/yourusername/project-gamma",
    image: "/projects/project-gamma.png",
    featured: false,
  },
   {
    id: 5,
    title: "Project Gamma",
    description:
      "A real-time data dashboard built with React and D3.js that visualizes financial market data from public APIs.",
    tags: ["React", "D3.js", "APIs", "Recharts"],
    liveUrl: "https://project-gamma.vercel.app",
    githubUrl: "https://github.com/yourusername/project-gamma",
    image: "/projects/project-gamma.png",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Acme Corp",
    location: "Remote",
    period: "Jan 2023 – Present",
    description: [
      "Led the migration of a legacy React app to Next.js, cutting load times by 40%.",
      "Mentored 3 junior developers through code reviews and pair programming.",
      "Designed and built a reusable component library adopted across 5 product teams.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Storybook"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Startup XYZ",
    location: "New York, NY",
    period: "Jun 2021 – Dec 2022",
    description: [
      "Built and shipped 10+ product features end-to-end in a fast-paced startup environment.",
      "Integrated third-party APIs including Stripe, Twilio, and SendGrid.",
      "Improved test coverage from 20% to 75% with Jest and React Testing Library.",
    ],
    tech: ["React", "JavaScript", "Node.js", "Jest"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Agency ABC",
    location: "Los Angeles, CA",
    period: "Aug 2019 – May 2021",
    description: [
      "Developed 20+ client websites using modern HTML, CSS, and JavaScript.",
      "Collaborated with designers to translate Figma mockups into pixel-perfect UIs.",
      "Optimized site performance, achieving 90+ Google Lighthouse scores.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];
