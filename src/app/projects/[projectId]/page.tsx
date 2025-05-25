import ProjectDetails from '@/components/ProjectDetails';
import { project } from '@/data/project';

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
      <ProjectDetails project ={newproject}/>
    </div>
  );
}

export default  ProjectDetailsPage;
