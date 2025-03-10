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
            title: "Trouvez votre cinéma - IDF",
            image: "/assets/projets/cinéma.png",
            description: "Dans une société où la data se fait de plus en plus présente, ce projet a été l'occasion de données vie à un jeu de données via une application interactive en javascript. En effet, l'application interactive présente le jeu de donnée des cinémas d'Île de France sous la forme d'une carte.",
            tools: ['Html', 'Tailwind CSS', 'JavaScript'],
            date: 2023,
            role: "Gestion de la map",
            link: "https://ornella11.github.io/Data-Visualisation-Cinema/",
          },
          {
            title: "Earz - site vitrine",
            image: "/assets/projets/earz.png",
            description: "Dans le cadre de ce projet universitaire, nous avons été amenés à créer une agence de communication fictive dans laquelle nous avons mené la conception d'un site web vitrine via le CMS WordPress avec l'utilisation de différents plugins.",
            tools: ['Wordpress', 'Elementor', 'Yoast SEO', 'Contact Form 7', 'WP Mail SMTP'],
            date: 2023,
            role: "-",
            link: "https://earz.infinityfreeapp.com/?i=1",
          },
          {
            title: "Association Arpip",
            image: "/assets/projets/arpip.png",
            description: "L’objectif de ce projet est de développer une application REACT qui contient l’implémentation du frontend du site APIRP (Association des Professeurs d'Italien de la Région Parisienne).",
            tools: ['React',],
            date: 2024,
            role: "-",
            link: "https://sae-401-react.vercel.app/accueil",
          },
          {
            title: "Unity",
            image: "/assets/projets/unity.jpg",
            description: "L'objectif de projet était de créer un dispositif interactif en utilisant le logiciel Unity, un outil pour la création de jeux vidéo en 2D ou 3D. Le but était de consolider notre compréhension d'Unity en réalisant un projet interactif complet.",
            tools: ['C#',],
            date: 2024,
            role: "-",
            link: "https://github.com/Diangou/SAE402",
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
