import ProjectDetails from '@/components/ProjectDetails';

import { notFound } from 'next/navigation';
// Fake project data (You can later replace with real DB or API)
const projects = [
  {
    id: 'basafinder',
    title: 'BasaFinder 🏡',
    description: 'A smart rental housing platform with Admin, Landlord, and Tenant dashboards.',
    features: [
      'Role-Based Authentication (JWT)',
      'Payment Gateway Integration',
      'Admin Panel for Monitoring',
      'Real-time Notifications',
      'Responsive UI with TailwindCSS',
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    image: '/basefinder.png', // 👉 You must add your project images inside /public/projects/
    github: 'https://github.com/ashiq-rahman07/basefinder-client',
    live: 'https://basefinder-client.vercel.app/',
  },
  {
    id: 'bikeshop',
    title: 'Bike Shop E-commerce 🏍️',
    description: 'A fully functional online bike shop with shopping cart, payments, and admin panel. Built using MERN Stack.',
    features: [
      'Role-Based Authentication (JWT)',
      'Payment Gateway Integration',
      'Admin Panel for Monitoring',
      'Real-time Notifications',
      'Responsive UI with TailwindCSS',
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    image: '/bikeshop.png',
    github: 'https://github.com/ashiq-rahman07/bikeshop-frontend',
    live: 'https://bikeshop-frontend.vercel.app/',
  },

  {
    id: 'plugedin',
    title: 'PluggedIn | Team Projects 🎨',
    description: 'Web base media recording site, Three recording modes available – Screen, Webcam, Audio Recording.',
    features: [
      'Role-Based Authentication (JWT)',
      'Payment Gateway Integration',
      'Admin Panel for Monitoring',
      'Real-time Notifications',
      'Responsive UI with TailwindCSS',
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    image: '/plugdin.png',
    github: 'https://github.com/mdpahlovi/plugged-in',
    live: 'https://pluggedin.vercel.app/',
  },
  // Add more project data here...
];


const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) =>{
  // Directly access the id from params, no need to use React.use()
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <ProjectDetails project ={ project}/>
    </div>
  );
}

export default  ProjectDetailsPage;
