"use client";
import React from "react";
import { motion } from "framer-motion";
import ListProjects from "./ListProjects";

const ProjectSection = () => {
  return (
    <div className="overflow-hidden px-4 mt-4 rounded-xl">
      <div className="grid grid-cols-1 gap-4 m-2">
        {[
          {
            title:"Projet 1 - App Web",
            image:"/assets/png/cinéma1.png",
            description: "Une application web avec React. Elle permet aux utilisateurs d'accéder à des fonctionnalités avancées tout en offrant une interface moderne et ergonomique. fonctionnalités avancées tout en offrant une interface.offrant une interface une interface.",
            tools:['React', 'Node.js', 'Tailwind'], 
            date: 2024,
            role: "Carte", 
            link: "",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ListProjects {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
