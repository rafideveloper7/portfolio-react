// src/components/Marquee/TechMarquee.tsx
import React from 'react';
import Marquee from './Marquee';

const TechMarquee: React.FC<{
  title?: string;
  variant?: 'default' | 'colorful' | 'minimal';
  direction?: 'left' | 'right';
}> = ({ 
  title = "Technologies I Work With", 
  variant = 'default',
  direction = 'left' 
}) => {
  // Tech stack data with icons
  const techStack = [
    { name: "React", color: "text-blue-400", bg: "bg-blue-900/20" },
    { name: "TypeScript", color: "text-blue-600", bg: "bg-blue-900/20" },
    { name: "Next.js", color: "text-white", bg: "bg-black/80" },
    { name: "Node.js", color: "text-green-500", bg: "bg-green-900/20" },
    { name: "Express", color: "text-gray-300", bg: "bg-gray-800/50" },
    { name: "MongoDB", color: "text-green-400", bg: "bg-green-900/20" },
    { name: "MERN Stack", color: "text-cyan-400", bg: "bg-cyan-900/20" },
    { name: "Tailwind CSS", color: "text-teal-400", bg: "bg-teal-900/20" },
    { name: "Redux", color: "text-purple-400", bg: "bg-purple-900/20" },
    { name: "Firebase", color: "text-yellow-400", bg: "bg-yellow-900/20" },
    { name: "GraphQL", color: "text-pink-400", bg: "bg-pink-900/20" },
    { name: "PostgreSQL", color: "text-blue-300", bg: "bg-blue-900/20" },
    { name: "Docker", color: "text-blue-500", bg: "bg-blue-900/20" },
    { name: "Git", color: "text-orange-500", bg: "bg-orange-900/20" },
    { name: "AWS", color: "text-yellow-600", bg: "bg-yellow-900/20" },
  ];

  const minimalStack = [
    "React", "TypeScript", "Next.js", "Node.js", "Express", 
    "MongoDB", "Tailwind", "Redux", "Firebase", "GraphQL"
  ];

  if (variant === 'minimal') {
    return (
      <div className="py-6">
        {title && <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>}
        <Marquee direction={direction} speed="fast" pauseOnHover={false}>
          {minimalStack.map((tech, index) => (
            <span key={index} className="text-lg font-medium px-4">
              {tech} •
            </span>
          ))}
        </Marquee>
      </div>
    );
  }

  if (variant === 'colorful') {
    return (
      <div className="py-8">
        {title && <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>}
        <Marquee direction={direction} speed="normal" gradientColor="from-gray-900">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${tech.bg} backdrop-blur-sm border border-gray-700/50`}
            >
              <span className={`text-lg font-bold ${tech.color}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    );
  }

  // Default variant
  return (
    <div className="py-10 bg-gradient-to-b from-gray-900/50 to-transparent">
      {title && <h3 className="text-2xl font-bold mb-8 text-center">{title}</h3>}
      <Marquee direction={direction} speed="normal">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-8"
          >
            <div className={`w-16 h-16 rounded-full ${tech.bg} flex items-center justify-center mb-2`}>
              <span className={`text-2xl font-bold ${tech.color}`}>
                {tech.name.charAt(0)}
              </span>
            </div>
            <span className={`text-sm font-semibold ${tech.color}`}>
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;