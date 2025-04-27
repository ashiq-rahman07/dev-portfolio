'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  slug: string;
  title: string;
  image: string;
}

const ProjectCard = ({ slug, title, image }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="group cursor-pointer bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden"
      >
        <div className="h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            width={500}
            height={300}
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
