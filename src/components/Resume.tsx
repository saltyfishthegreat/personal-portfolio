"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? "#f3f4f6" : "#ffffff" }}
      className="border-b border-gray-200 last:border-b-0 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
      >
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title} at {company}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
        </div>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <ChevronDown className="text-gray-600 dark:text-gray-300" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden px-4 pb-4"
          >
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              {description.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Resume: React.FC = () => {
  const experienceData = [
    {
      title: "International Student Support App",
      company: "HCDE 302 & 303",
      duration: "[9, 2024] – [3, 2025]",
      description: [
        "Architected a mobile application to assist international students in adapting to local environments, utilizing social science frameworks to inform UX/UI design.",
        "Conducted user research to identify pain points in cross-cultural adaptation and translated findings into actionable functional requirements.",
      ],
    },
    {
      title: "Badminton Court Management System",
      company: "Personal/Course Project",
      duration: "[1, 2025] – [2, 2025]",
      description: [
        "Developed a comprehensive management application supporting user reservations, court scheduling, and tournament organization for local clubs.",
        "Optimized management workflows, resulting in improved court utilization and organizational efficiency for local sports communities.",
      ],
    },
    {
      title: "TCG Card Recycling Project",
      company: "HCDE 313",
      duration: "[3，2025] – [6，2025]",
      description: [
        "Designed a circular economy solution for Trading Card Games (TCG) to minimize waste from low-value cards.",
        "Validated the feasibility of card recycling through user interviews and proposed an innovative sustainability roadmap for the gaming industry.",
      ],
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Projects</h2>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-800">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Resume;
