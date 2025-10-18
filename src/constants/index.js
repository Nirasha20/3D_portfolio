import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SafeRoute",
    company_name: "Road Safety Web Application",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "🚗 Developed a web app enabling users to report and view road hazards (e.g., potholes, accidents, construction) with real-time Google Maps integration.",
      "⚙️ Implemented a robust tech stack using Next.js 14 (TypeScript) for the frontend, Ballerina + PostgreSQL for the backend, and JWT-based authentication for secure access.",
      "📍 Integrated intelligent route planning that combines traffic data and community-reported hazards to suggest safer travel routes.",
      "🧭 Built an administrative dashboard for the Road Development Authority (RDA) to manage reports, monitor trends, and mark hazards as resolved.",
      "🌐 Enhanced user engagement with features like image uploads, report comments, notifications, and auto-deletion of temporary hazard reports.",
    ],
    boxes: [
      { title: "Next.js" },
      { title: "Ballerina" },
      { title: "PostgreSQL" },
    ],
  },
  {
    title: "SalonBooking.lk",
    company_name: "Salon Booking Web Application",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "💇‍♀️Simplifies salon appointment booking, rescheduling, and cancellations for customers.",
      "💅Helps salon owners manage staff, services, and daily bookings efficiently.",
      "🛡️Enables admins to verify salons, monitor activity, and handle user complaints for platform reliability.",
      "🔔Enhances overall user experience through notifications, reviews, and location-based salon discovery.",
    ],
    boxes: [
      { title: "Next.js" },
      { title: "MongoDB" },
      { title: "TypeScript" },
    ],
  },
  {
    title: "Aquatica",
    company_name: "Automated Home Aquarium Management System",
    icon: shopify,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "🐠 Automates essential aquarium care including feeding, water refilling, and lighting control.",
      "🌡️ Monitors water parameters in real-time using sensors for temperature and clarity.",
      "🍽️ Automated feeding system ensures timely, balanced feeding for fish health.",
      "💧 Water clarity management automatically refills the tank when turbidity increases.",
      "📱 Mobile app integration provides real-time updates on temperature and water conditions for easy monitoring.",
    ],
    boxes: [
      { title: "ESP32" },
      { title: "C++ (Arduion)" },
      
    ],
  },
  {
    title: "Portfolio",
    company_name: "Personal 3D Portfolio Website",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "🎨 Learned to create and animate 3D models using ThreeJS and React Three Fiber.",
      "⚙️ Applied scalable React patterns like Higher Order Components (HOCs) for cleaner, reusable code.",
      "📱 Ensured responsive, high-performance design using TailwindCSS, Framer Motion, and Suspense/Preload.",
      
    ],
    boxes: [
      { title: "React Three Fiber" },
      { title: "ThreeJS" },
      { title: "TailwindCSS" },
      
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
