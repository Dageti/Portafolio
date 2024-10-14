import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "navbar.brand": "Portfolio",
      "navbar.projects": "Projects",
      "navbar.about": "About Me",
      "navbar.switch_language": "EN",
      "home.greeting": "Hello, I'm Matías",
      "home.description": "Full-Stack Developer",
      "home.button": "View my projects",
      "aboutme.title": "About Me",
      "aboutme.p1":
        "I am a junior full-stack developer with knowledge in HTML, CSS, JavaScript, React, Flask, and Python. I enjoy working on projects that allow me to improve my coding skills, especially in front-end development and API integration.",
      "aboutme.p2":
        "I am continuously learning and expanding my expertise in full-stack development, with a focus on building responsive, user-friendly web applications.",
      "aboutme.p3":
        "Feel free to reach out to me through my LinkedIn or check out my GitHub for more projects.",
        "projects.pagetitle": "My projects",
      "projects.button": "Repository",
      "projects.detail": "No media available for this project, come back later.",
    },
  },
  es: {
    translation: {
      "navbar.brand": "Portafolio",
      "navbar.projects": "Proyectos",
      "navbar.about": "Sobre mí",
      "navbar.switch_language": "ES",
      "home.greeting": "Hola, soy Matías",
      "home.description": "Desarrollador Full-Stack",
      "home.button": "Ve mis proyectos",
      "aboutme.title": "Sobre mí",
      "aboutme.p1":
        "Soy un desarrollador full-stack junior con conocimientos en HTML, CSS, JavaScript, React, Flask y Python. Me gusta trabajar en proyectos que me permiten mejorar mis habilidades de programación, especialmente en el desarrollo front-end y la integración de API.",
      "aboutme.p2":
        "Estoy en constante aprendizaje, ampliando mi experiencia en el desarrollo full-stack, con un enfoque en la creación de aplicaciones web receptivas y fáciles de usar.",
      "aboutme.p3":
        "No dudes en contactarme a través de mi LinkedIn o consultar mi GitHub para ver más proyectos.",
        "projects.pagetitle": "Mis proyectos",
        "projects.button": "Repositorio",
        "projects.detail": "No hay multimedia disponible para este proyecto, vuelva más tarde.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
