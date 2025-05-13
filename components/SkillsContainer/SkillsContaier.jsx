import { skillsData } from '../../data/timelinedata';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SkillsContainer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  if (!isMounted) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {skillsData.map((item) => (
        <motion.section 
          key={item.id} // Usa un ID único en lugar del índice
          variants={itemVariants}
          className="flex flex-col items-center gap-8 mb-16 last:mb-0"
        >
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-violet-400 mb-2">
              {item.title}
            </h3>
            <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center  gap-6 md:gap-8 lg:gap-10">
            {item.images.map((image) => (
              <motion.div
                key={image.name} // Usa un identificador único de la imagen
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 300, damping: 5 }}
              >
                <SkillCard 
                  info={image} 
                  width={100} 
                  height={100} 
                  alt={`Icono de ${image.name}`}
                  className="hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
}