"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Layout, Layers, Linkedin, User } from 'lucide-react';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCase = ({ icon, title, description }: UseCaseProps) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-start"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 p-3 bg-gray-50 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Paintbrush className="h-6 w-6 text-gray-800" />,
      title: "Personal Brand",
      description: "Create consistent and beautiful gradients that align with the visual language of your personal brand."
    },
    {
      icon: <Linkedin className="h-6 w-6 text-gray-800" />,
      title: "LinkedIn Banners",
      description: "Stand out from the crowd with a unique gradient banner on your LinkedIn profile."
    },
    {
      icon: <User className="h-6 w-6 text-gray-800" />,
      title: "Profile Photos",
      description: "Create stunning profile pictures for GitHub, Slack, X, and other platforms."
    },
    {
      icon: <Layout className="h-6 w-6 text-gray-800" />,
      title: "UI Components",
      description: "Enhance your UI elements with subtle gradients that add depth and visual interest."
    },
    {
      icon: <Layers className="h-6 w-6 text-gray-800" />,
      title: "Marketing Materials",
      description: "Create eye-catching visuals for social media, presentations, and promotional content."
    },
  ];

  return (
    <section className="mt-6">
      <div className="mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="heading-medium text-gray-900">
            Use Cases
          </h2>
          <p className="subtext-muted">
            Create beautiful gradients for any design need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCase 
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
