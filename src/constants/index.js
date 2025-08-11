const navLinks = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "Work",
    link: "#showcase",
  },
  {
    name: "Tech Stack",
    link: "#tech",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const logoIcons = [
  { imgPath: "/images/TECH/HTML5.svg", name: "HTML" },
  { imgPath: "/images/TECH/JavaScript.svg", name: "JavaScript" },
  { imgPath: "/images/TECH/TypeScript.svg", name: "TypeScript" },
  { imgPath: "/images/TECH/CSS.svg", name: "CSS" },
  { imgPath: "/images/TECH/tailwind.svg", name: "Tailwind CSS" },
  { imgPath: "/images/TECH/vite.svg", name: "Vite" },
  { imgPath: "/images/TECH/React.svg", name: "React" },
  { imgPath: "/images/TECH/Node.svg", name: "Node.js" },
  { imgPath: "/images/TECH/MongoDB.svg", name: "MongoDB" },
  { imgPath: "/images/TECH/Firebase.svg", name: "Firebase" },
  { imgPath: "/images/TECH/MySQL.svg", name: "MySQL" },
];

const cardData = [
  {
    id: 1,
    image: "../images/AI.png",
    title: "BrainWave | AI Chatting",
    description: "An elegant interface for an AI generator, crafted to enhance your React and Tailwind skills. It features bento layouts, parallax effects, and a fully responsive design to explore modern UI through real-world practice.",
    detailsLink: "https://github.com/Abderrahmane0dx/AI-PROJECT-REACT", 
    demoLink: "https://ai-project-react-ecah.vercel.app/" 
  },
  {
    id: 2,
    image: "../images/E-COMMERCE.png",
    title: "DigitalTech | Modern Experience",
    description: "A sleek online store for phones, laptops, tablets, and smartwatches. Built with clean UI components, intuitive UX, and fully responsive layouts to deliver a seamless and modern shopping experience across all devices.",
    detailsLink: "https://github.com/Abderrahmane0dx/PROJET-WEB",
    demoLink: "#"
  },
  {
    id: 3,
    image: "../images/MOVIE-PROJECT.png",
    title: "CineStream | Your Home Cinema",
    description: "Explore a world of movies from the comfort of your home. This app fetches data from an external API to display trending films in a clean, responsive interface—bringing the cinema experience to your screen.",
    detailsLink: "https://github.com/Abderrahmane0dx/LEARNING-REACT",
    demoLink: "https://cinestream-silk.vercel.app/"
  },
  {
    id: 4,
    image: "../images/CHAT-APP1.png",
    title: "Chatty | Realtime Messaging App",
    description: "A full-stack MERN chat app with real-time messaging powered by Socket.io. Inspired by modern platforms like Instagram and Facebook, it delivers smooth, instant conversations in a sleek and responsive UI.",
    detailsLink: "https://github.com/Abderrahmane0dx/CHAT-APP",
    demoLink: "#"
  }
];

const skills = [
  {
    text:
      "Web & E-Commerce Development: Crafting modern, responsive, and user-friendly web interfaces using HTML5, CSS3, JavaScript, and Tailwind — with a focus on elegant design and seamless UX for online stores.",
  },
  {
    text:
      "Backend Engineering: Developing secure and scalable REST APIs with FastAPI and Express.js — including JWT authentication, validation logic, async handling, and modular architecture.",
  },
  {
    text:
      " Database Optimization: Designing optimized schemas and queries across MySQL, PostgreSQL, Supabase, and Firebase — ensuring fast performance with indexing, relational modeling, and clean data",
  },
  {
    text:
      "E-Commerce Solutions: Building full-featured e-commerce platforms with product catalogs, carts, checkout flows, admin panels, and payment integrations — tailored for both speed and conversion.",
  },
  {
    text:
      "Project Highlights: DigitalTech – e-commerce platform, BrainWave – sleek AI landing page (ReactJS + TailwindCSS), Chatty – real-time messaging (React + ExpressJS + JWT), CineStream – movie explorer (external APIs).",
  },
  {
    text:
      "Deployment & Hosting: Deploying projects on Vercel, Render, and Firebase — with CI/CD setups, environment variable management, and performance monitoring for production stability.",
  },
];

export {
  skills,
  logoIcons,
  cardData,
  navLinks,
};