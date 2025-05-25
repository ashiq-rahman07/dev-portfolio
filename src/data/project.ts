import { ProjectProps } from "@/components/sections/ProjectCard";

export const project = [ 
 {
  name:"House Solution",
  id:"1",
  images: [
    "/basefinder.png",
    "/housedas.png",
  
  ],
    challenge: "Designing dynamic role-based experiences for three user types, implementing a real-time notification system tailored to different roles, and managing complex data relationships between users, properties, and payments.",
    solution: "Implemented robust JWT-based RBAC and Express middleware for secure route access, created a real-time notification system tailored to each role’s needs, and used flexible Mongoose schemas and population for smooth data handling",
    features: [
      "🏡 Dynamic Listings: Tenants can browse available rental properties with filters like price, category, and location.",
      "📦 Tenant Requests: Tenants can submit rental requests, and landlords can approve or reject them.",
      "Role-Based Dashboards: Tailored dashboards for admins, landlords, and tenants with specific actions.",
      "🔔 Notification System: Role-specific notifications for rental request updates and approvals.",
      "🗃️ Payment Tracking: Landlords and tenants can view payment data securely.",
      "🌟 Responsive UI: Modern and attractive design with dynamic user interactions."
    ],
    tags: ["Next js", "Node.js", "Express Js", "MongooseDB", "Tailwind CSS", "TypeScript", "ShadCN UI"],
    liveLink: "https://basefinder-client.vercel.app/",
    githubFrontEnd: "https://github.com/ashiq-rahman07/basefinder-client",
    githubBackEnd: "https://github.com/ashiq-rahman07/basefinder-server",
     description: 'House Solution is a full-stack web application that simplifies the rental housing process by connecting tenants, landlords, and admins through a seamless and secure platform.',
  },
 {
  name:"ClassicRider Bike Shop",
  id:"2",
  images: [
    "/bike2.png",
    "/bike.png",
    "/bikedas.png",
  
  ],
  description: 'A fully functional online bike shop with shopping cart, payments, and admin panel. Built using MERN Stack.',
    challenge: "Implementing role-based access control for admin and users.Integrating cart functionality that supports different product types (bikes and gearEnsuring smooth, responsive design across all devices.",
    solution: "Used JWT-based authentication and middleware to protect routes and differentiate rolesCreated a flexible cart data structure that can handle multiple product types seamlesslyLeveraged Tailwind CSS and modern UI components for adaptive and beautiful layouts.",
    features: [
     'Bike & gear catalog with images, prices, and categories',
      'Add to cart & secure checkout process',
      'Dynamic filtering & sorting',
      'Admin dashboard for order and inventory management',
      'User authentication with JWT'
    ],
    tags: ["React js", "Node.js", "Express Js", "MongooseDB", "Tailwind CSS", "TypeScript", "ShadCN UI",],
    liveLink: "https://bikeshop-frontend.vercel.app/",
     githubFrontEnd: "https://github.com/ashiq-rahman07/bikeshop-frontend",
    githubBackEnd: "https://github.com/ashiq-rahman07/bikeshop-server",
  },
{
  name:"PluggedIn | Team Projects",
  id:"3",
  images: [
    "/plugged.png",
 
  ],
    challenge: "Designing an AI-powered content creation tool that generates quality content while remaining intuitive for non-technical users.",
    solution: "Developed a React frontend with Python Flask backend that interfaces with OpenAI's API. Implemented caching and optimization for faster response times.",
    features: [
      "Custom content generation based on user prompts",
      "Multiple content formats (blog posts, social media, emails)",
      "Style and tone customization",
      "Content editing and refinement tools",
      "SEO optimization suggestions",
      "Export to various platforms and formats"
    ],
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveLink: "https://pluggedin.vercel.app/",
    githubFrontEnd: "https://github.com/mdpahlovi/plugged-in",
    githubBackEnd: "https://github.com/mdpahlovi/plugged-in",
     description: 'Built a web app with screen/webcam/audio recording, real-time team chat, media sharing, and rich text editing.Led development, contributed to backend, text editor, and media features.',
    
  },
 
];

export const projectsData: ProjectProps[] = [
  {
    id: "1",
    title: 'House Solution 🏡',
    description: 'House Solution is a full-stack web application that simplifies the rental housing process by connecting tenants, landlords, and admins through a seamless and secure platform.',
    image: '/basefinder.png',
   tags: ["Next js", "Node.js", "Express Js", "MongooseDB", "Tailwind CSS", "TypeScript", "ShadCN UI"],
    demoLink: 'https://basefinder-client.vercel.app/',
    githubFrontEnd: "https://github.com/ashiq-rahman07/basefinder-client",
    githubBackEnd: "https://github.com/ashiq-rahman07/basefinder-server",
    featured: true
  },
  {
    id: "2",
    title: 'Classic Rider | E-commerce 🏍️',
    description: 'A fully functional online bike shop with shopping cart, payments, and admin panel. Built using MERN Stack.',
    image: '/bike.png',
     tags: ["React js", "Node.js", "Express Js", "MongooseDB", "Tailwind CSS", "TypeScript", "ShadCN UI"],
    demoLink: 'https://bikeshop-frontend.vercel.app/',
    githubFrontEnd: "https://github.com/ashiq-rahman07/basefinder-client",
    githubBackEnd: "https://github.com/yourusername/taskapp",
  },
  {
    id: "3",
    title: 'PluggedIn | Team Projects 🎨',
    description: 'A fully functional online bike shop with shopping cart, payments, and admin panel. Built using MERN Stack.',
    image: "/plugged.png",
     tags: ["Next js", "Node.js", "Express Js", "MongooseDB", "Tailwind CSS", "TypeScript", "ShadCN UI",],
    demoLink: "https://pluggedin.vercel.app/",
    githubFrontEnd: "https://github.com/mdpahlovi/plugged-in",
    githubBackEnd: "https://github.com/mdpahlovi/plugged-in",
  },

];