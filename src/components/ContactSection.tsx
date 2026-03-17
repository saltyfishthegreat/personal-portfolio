"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Get in Touch</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-8"
      >
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-gray-600 dark:text-gray-300" size={24} />
            <a href="mailto:tingdz@uw.edu" className="text-blue-600 hover:underline">
              tingdz@uw.edu
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-gray-600 dark:text-gray-300" size={24} />
            <a href="tel:(206) 579-2023" className="text-blue-600 hover:underline">
              (206) 579-2023
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-gray-600 dark:text-gray-300" size={24} />
            <p className="text-gray-700 dark:text-gray-300">Seattle, WA</p>
          </div>
        </div>
        {/* You can add a contact form here if needed */}
      </motion.div>
    </section>
  );
};

export default ContactSection;