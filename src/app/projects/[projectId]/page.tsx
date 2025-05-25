import ProjectDetails from '@/components/ProjectDetails';

import { notFound } from 'next/navigation';
// Fake project data (You can later replace with real DB or API)
// const projects = [
//   {
//     id: 'basafinder',
//     title: 'BasaFinder 🏡',
//     description: 'A smart rental housing platform with Admin, Landlord, and Tenant dashboards.',
//     features: [
//       'Role-Based Authentication (JWT)',
//       'Payment Gateway Integration',
//       'Admin Panel for Monitoring',
//       'Real-time Notifications',
//       'Responsive UI with TailwindCSS',
//     ],
//     technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
//     image: '/basefinder.png', // 👉 You must add your project images inside /public/projects/
//     github: 'https://github.com/ashiq-rahman07/basefinder-client',
//     live: 'https://basefinder-client.vercel.app/',
//   },
//   {
//     id: 'bikeshop',
//     title: 'Bike Shop E-commerce 🏍️',
//     description: 'A fully functional online bike shop with shopping cart, payments, and admin panel. Built using MERN Stack.',
//     features: [
//       'Role-Based Authentication (JWT)',
//       'Payment Gateway Integration',
//       'Admin Panel for Monitoring',
//       'Real-time Notifications',
//       'Responsive UI with TailwindCSS',
//     ],
//     technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
//     image: '/bikeshop.png',
//     github: 'https://github.com/ashiq-rahman07/bikeshop-frontend',
//     live: 'https://bikeshop-frontend.vercel.app/',
//   },

//   {
//     id: 'plugedin',
//     title: 'PluggedIn | Team Projects 🎨',
//     description: 'Web base media recording site, Three recording modes available – Screen, Webcam, Audio Recording.',
//     features: [
//       'Role-Based Authentication (JWT)',
//       'Payment Gateway Integration',
//       'Admin Panel for Monitoring',
//       'Real-time Notifications',
//       'Responsive UI with TailwindCSS',
//     ],
//     technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
//     image: '/plugdin.png',
//     github: 'https://github.com/mdpahlovi/plugged-in',
//     live: 'https://pluggedin.vercel.app/',
//   },
//   // Add more project data here...
// ];

// const projectImages = {
//   ecommerce: [
//     "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
//     "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000",
//     "https://images.unsplash.com/photo-1565084888279-aca607ee8ca8?q=80&w=2000"
//   ],
//   taskapp: [
//     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000",
//     "https://images.unsplash.com/photo-1554415707-6e8cfc93806b?q=80&w=2000",
//     "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2000"
//   ],
//   aigen: [
//     "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000",
//     "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000",
//     "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=2000"
//   ],
//   realestate: [
//     "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000",
//     "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2000",
//     "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2000"
//   ],
//   socialdash: [
//     "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000",
//     "https://images.unsplash.com/photo-1541746972996-4fc1d6488381?q=80&w=2000",
//     "https://images.unsplash.com/photo-1534131707746-25d604851a1f?q=80&w=2000"
//   ],
//   fitnessapp: [
//     "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2000",
//     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000",
//     "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2000"
//   ]
// };

// Additional project details
const project = [ 
 {
  name:" ecommerce",
  id:"1",
  images: [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000",
    "https://images.unsplash.com/photo-1565084888279-aca607ee8ca8?q=80&w=2000"
  ],
    challenge: "Developing a scalable e-commerce solution with secure payment processing and intuitive user experience.",
    solution: "Implemented a microservices architecture with Next.js for frontend and Node.js backend services. Integrated Stripe for secure payments and MongoDB for flexible data storage.",
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure checkout with multiple payment options",
      "Order tracking and history",
      "Admin dashboard for inventory management"
    ],
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/taskapp"
  },
 {
  name:"ClassicRider Bike Shop",
  id:"2",
  images: [
    "/bike2.png",
    "/bike.png",
    "/bikedas.png",
  
  ],
    challenge: "Implementing role-based access control for admin and users.Integrating cart functionality that supports different product types (bikes and gearEnsuring smooth, responsive design across all devices.",
    solution: "Used JWT-based authentication and middleware to protect routes and differentiate rolesCreated a flexible cart data structure that can handle multiple product types seamlesslyLeveraged Tailwind CSS and modern UI components for adaptive and beautiful layouts.",
    features: [
     'Bike & gear catalog with images, prices, and categories',
      'Add to cart & secure checkout process',
      'Dynamic filtering & sorting',
      'Admin dashboard for order and inventory management',
      'User authentication with JWT'
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Node.js', 'Express.js', 'MongoDB','Redux Js'],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/taskapp"
  },
{
  name:"aigen",
  id:"3",
  images: [
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000",
    "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=2000"
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
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/taskapp"
  },
 {
  name:"realestate",
  id:"4",
  images: [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000",
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2000",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2000"
  ],
    challenge: "Building a comprehensive real estate platform with location-based search and immersive property viewing.",
    solution: "Created a React application with Express backend, integrating Google Maps API for location services and custom 3D rendering for virtual tours.",
    features: [
      "Advanced property search with location filters",
      "Interactive map view of available properties",
      "Virtual tours and 360° property views",
      "Mortgage calculator and financing options",
      "Agent directory and direct messaging",
      "Saved searches and property alerts"
    ],
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/taskapp"
  },
 {
  name:"socialdash",
  id:"5",
  images: [
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000",
    "https://images.unsplash.com/photo-1541746972996-4fc1d6488381?q=80&w=2000",
    "https://images.unsplash.com/photo-1534131707746-25d604851a1f?q=80&w=2000"
  ],
    challenge: "Developing a comprehensive analytics dashboard that aggregates data from multiple social media platforms with meaningful visualizations.",
    solution: "Built with Vue.js frontend and Express backend, leveraging D3.js for custom data visualizations. PostgreSQL handles complex data relationships.",
    features: [
      "Cross-platform social media analytics",
      "Custom report generation and scheduling",
      "Audience demographics and behavior analysis",
      "Campaign performance tracking",
      "Content engagement metrics",
      "Competitive analysis tools"
    ],
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/taskapp"
  },
  {
    name:"fitnessapp",
    id:"6",
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2000",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2000"
    ],
    challenge: "Creating a mobile-first fitness application that works offline while synchronizing data across devices.",
    solution: "Developed with React Native for cross-platform compatibility and Firebase for real-time data synchronization and offline capabilities.",
    features: [
      "Personalized workout plans and routines",
      "Progress tracking with visual charts",
      "Nutrition logging and meal planning",
      "Offline workout capability",
      "Wearable device integration",
      "Community challenges and social features"
    ],
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/taskapp"
  }
];

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) =>{
  // Directly access the id from params, no need to use React.use()
  const { projectId } = await params;
  const newproject = project.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <ProjectDetails project ={ newproject}/>
    </div>
  );
}

export default  ProjectDetailsPage;
