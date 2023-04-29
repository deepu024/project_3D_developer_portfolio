import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  tripguide,
  redbasil,
  nextjs,
  firebase,
  flutter,
  manavsachdev,
  crypto,
  redbasilweb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  }
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Redbasil Technologies Pvt. Ltd",
    icon: redbasil,
    iconBg: "#383E56",
    date: "August 2022 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Manav SachDev Design",
    description:
      "MSDS is a multi-disciplinary brand design studio based in New Delhi NCR, India with extensive experience in creating successful and acclaimed visual communications across the globe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: manavsachdev,
    source_code_link: "https://github.com/deepu024/MSDS",
    webLink: "https://www.manavsachdevdesign.com"
  },
  {
    name: "Crypto",
    description:
      "Web application that help people to see the crypto prices and graphs with different currencies",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/deepu024/Crypto-App",
    webLink: "https://crypto-app-sand-nine.vercel.app/"
  },
  {
    name: "RedBasil Web Application",
    description:
      "Redbasil's asset-light B2B marketplace features a curated catalog of 10k+ ingredients and high-quality food suppliers.​",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: redbasilweb,
    source_code_link: "https://github.com/",
    webLink: "https://redbasil-web-ph35j7k57a-el.a.run.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
