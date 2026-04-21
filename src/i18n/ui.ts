export const defaultLang = 'en' as const;
export type Lang = 'en' | 'es';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.technologies': 'Technologies',
    'nav.contact': 'Contact',
    'hero.role': 'Full-Stack Developer',
    'hero.specialization': 'MEAN, MERN and Python specialist',
    'hero.available': 'Available for work.',
    'hero.typingRole': 'a Developer',
    'section.projects': 'Featured Projects',
    'section.about': 'About Me',
    'section.technologies': 'Technologies',
    'section.contact': 'Contact Me',
    'about.description': `I'm a Systems Engineering student, currently in the <strong>fourth year</strong> of the degree, at <strong>Universidad Santa Maria</strong>. I have participated in different teams for application development, working as a full stack developer.<br/>I am currently working part-time on <strong>The Vault Software</strong> (personal project) and at <strong>Lagro</strong> (a Chilean software company).`,
    'about.downloadCv': 'Download CV',
    'about.contact': 'Contact',
    'contact.description': 'Feel free to reach out to me for any inquiries, collaborations or opportunities.',
    'projects.viewMore': 'View More Projects',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    'projects.screenshotAlt': 'Screenshot of the project',
    'projects.allTitle': "All the projects I've worked on",
    'meta.title': 'Moisés Jimenez Portfolio - Full-Stack Developer',
    'meta.description': 'Hire Moises Jimenez to create your web application. Full-Stack developer specialized in creating creative applications and solutions.',
    'meta.projectsTitle': 'Moisés Jimenez Portfolio - Projects',
    'footer.rights': 'All Rights Reserved.',
    'lang.switch': 'ES',
    'lang.switchLabel': 'Cambiar a Español',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.technologies': 'Tecnologías',
    'nav.contact': 'Contacto',
    'hero.role': 'Desarrollador Full-Stack',
    'hero.specialization': 'Especialista en MEAN, MERN y Python',
    'hero.available': 'Disponible para trabajar.',
    'hero.typingRole': 'un Desarrollador',
    'section.projects': 'Proyectos Destacados',
    'section.about': 'Sobre Mí',
    'section.technologies': 'Tecnologías',
    'section.contact': 'Contáctame',
    'about.description': `Soy estudiante de Ingeniería de Sistemas, actualmente en el <strong>cuarto año</strong> de la carrera, en la <strong>Universidad Santa María</strong>. He participado en diferentes equipos de desarrollo de aplicaciones, trabajando como desarrollador full stack.<br/>Actualmente trabajo a tiempo parcial en <strong>The Vault Software</strong> (proyecto personal) y en <strong>Lagro</strong> (empresa de software chilena).`,
    'about.downloadCv': 'Descargar CV',
    'about.contact': 'Contacto',
    'contact.description': 'No dudes en contactarme para cualquier consulta, colaboración u oportunidad.',
    'projects.viewMore': 'Ver Más Proyectos',
    'projects.viewCode': 'Ver Código',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.screenshotAlt': 'Captura del proyecto',
    'projects.allTitle': 'Todos los proyectos en los que he trabajado',
    'meta.title': 'Portafolio de Moisés Jimenez - Desarrollador Full-Stack',
    'meta.description': 'Contrata a Moisés Jimenez para crear tu aplicación web. Desarrollador Full-Stack especializado en la creación de aplicaciones y soluciones creativas.',
    'meta.projectsTitle': 'Portafolio de Moisés Jimenez - Proyectos',
    'footer.rights': 'Todos los derechos reservados.',
    'lang.switch': 'EN',
    'lang.switchLabel': 'Switch to English',
  },
} as const;

type UIKeys = keyof typeof ui[typeof defaultLang];

export function getLang(url: URL): Lang {
  if (url.pathname.startsWith('/es')) return 'es';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKeys): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getNavPrefix(lang: Lang): string {
  return lang === 'es' ? '/es' : '';
}
