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
            title: "Le BUT MMI",
            image: "/assets/projets/butMmi.png",
            description: "Dans ce projet, je suis initiée au développement mobile en réalisant une application interactive illustrant les étapes de création d’une limonade.",
            tools: ['JavaScript', 'MongoDB', 'Nunjucks', 'CSS'],
            date: 2025,
            category: "Back-end",
            link: "https://github.com/dancodeur/SAE-501",
          },
          {
            title: "Limonade App - Android studio",
            image: "/assets/projets/limonadeApp.png",
            description: "Dans ce projet, je suis initiée au développement mobile en réalisant une application interactive illustrant les étapes de création d’une limonade.",
            tools: ['Android Studio', 'Kotlin', 'IntelliJ'],
            date: 2025,
            category: "Application mobile",
            link: "https://github.com/Ornella11/LimondeApp",
          },
          {
            title: "Unity - jeux vidéo",
            image: "/assets/projets/unity.jpg",
            description: "L'objectif de projet était de créer un dispositif interactif en utilisant le logiciel Unity, un outil pour la création de jeux vidéo en 2D ou 3D. Le but était de consolider notre compréhension d'Unity en réalisant un projet interactif complet.",
            tools: ['C#', 'Unity'],
            date: 2024,
            category: "Jeux vidéo",
            link: "https://github.com/Diangou/SAE402",
          },
          {
            title: "Environnement Lunar Lander",
            image: "/assets/projets/pandas.png",
            description: "Le devoir consiste à implémenter l’algorithme Q-learning pour un agent évoluant dans un environnement avec états continus, en utilisant la technique du tiling pour discrétiser l’espace d’état. L’objectif est d’appliquer cette méthode sur Lunar Lander afin d’optimiser les actions de l’agent par apprentissage par renforcement.",
            tools: ['Python', 'Google Colab'],
            date: 2024,
            category: "Intelligence Artificielle - ML/RL",
            link: "https://colab.research.google.com/drive/13ZJFTEOF3zWoHfYBq52V1bChT5RMDrUx?usp=sharing",
          },
          {
            title: "Association Arpip",
            image: "/assets/projets/arpip.png",
            description: "L’objectif de ce projet est de développer une application REACT qui contient l’implémentation du frontend du site APIRP (Association des Professeurs d'Italien de la Région Parisienne).",
            tools: ['React', 'Node JS', 'Vercel'],
            date: 2024,
            category: "Front-end",
            link: "https://sae-401-react.vercel.app/accueil",
          },
          {
            title: "Trouvez votre cinéma - IDF",
            image: "/assets/projets/cinéma.png",
            description: "Dans une société où la data se fait de plus en plus présente, ce projet a été l'occasion de données vie à un jeu de données via une application interactive en javascript. En effet, l'application interactive présente le jeu de donnée des cinémas d'Île de France sous la forme d'une carte.",
            tools: ['Html', 'Tailwind CSS', 'JavaScript'],
            date: 2024,
            category: "Data visualisation",
            link: "https://ornella11.github.io/Data-Visualisation-Cinema/",
          },
          {
            title: "Earz - site vitrine",
            image: "/assets/projets/earz.png",
            description: "Dans le cadre de ce projet universitaire, nous avons été amenés à créer une agence de communication fictive dans laquelle nous avons mené la conception d'un site web vitrine via le CMS WordPress avec l'utilisation de différents plugins.",
            tools: ['Wordpress', 'Elementor', 'Yoast SEO', 'Contact Form 7', 'WP Mail SMTP'],
            date: 2023,
            category: "CMS",
            link: "https://earz.infinityfreeapp.com/?i=1",
          },
          {
            title: "Modern Homes - Maquette",
            image: "/assets/projets/modernHomes.png",
            description: "Modern Homes est une agence immobilière fictive permettant aux particuliers et professionnels d’acheter ou vendre des biens. La maquette Figma intègre les principes d’UX/UI design, garantissant une interaction fluide et intuitive sur le site web.",
            tools: ['Figma'],
            date: 2023,
            category: "UX/UI",
            link: "https://www.figma.com/proto/iNMfwFJrekv8t4C05b5wsA/maquette-TP3-A?node-id=4-2&p=f&t=n40I3mbFQtiK3MDE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A2",
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
