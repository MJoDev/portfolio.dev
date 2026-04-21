export const defaultLang = 'en' as const;
export type Lang = 'en' | 'es';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.technologies': 'Technologies',
    'nav.contact': 'Contact',
    'hero.role': 'Systems Engineer',
    'hero.specialization': 'React · Node.js · Django · PostgreSQL',
    'hero.available': 'Available for work.',
    'hero.typingRole': 'a Systems Engineer',
    'section.projects': 'Featured Projects',
    'section.experience': 'Work Experience',
    'section.about': 'About Me',
    'section.technologies': 'Technologies',
    'section.contact': 'Contact Me',
    'about.description': `I'm a graduated <strong>Systems Engineer</strong> with over <strong>4 years of experience</strong> building full-stack web applications and scalable APIs. Frontend: <strong>React, Next.js, Vite + TanStack Query</strong>. Backend: <strong>Node.js, Express, NestJS, Django, FastAPI</strong>. Databases: <strong>PostgreSQL, MongoDB, MySQL</strong>. I also work with <strong>AWS, Firebase, Supabase</strong> and <strong>AI/LLM integrations</strong> (LangChain, N8N).<br/>Former <strong>Tech Lead at Lagro</strong> (agricultural SaaS), scaling platforms to handle high-volume data. Currently freelancing on <strong>Upwork</strong> as a Rising Talent with $5K+ in earnings.`,
    'about.downloadCv': 'Download CV',
    'about.contact': 'Contact',
    'contact.description': 'Feel free to reach out to me for any inquiries, collaborations or opportunities.',
    'projects.viewMore': 'View More Projects',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    'projects.screenshotAlt': 'Screenshot of the project',
    'projects.allTitle': "All the projects I've worked on",
    'meta.title': 'Moisés Jimenez Portfolio - System Engineer',
    'meta.description': 'Hire Moises Jimenez to create your web application. System Engineer & Developer specialized in creating creative applications and solutions.',
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
    'hero.role': 'Ingeniero de Sistemas',
    'hero.specialization': 'React · Node.js · Django · PostgreSQL',
    'hero.available': 'Disponible para trabajar.',
    'hero.typingRole': 'un Ingeniero de Sistemas',
    'section.projects': 'Proyectos Destacados',
    'section.experience': 'Experiencia Laboral',
    'section.about': 'Sobre Mí',
    'section.technologies': 'Tecnologías',
    'section.contact': 'Contáctame',
    'about.description': `Soy <strong>Ingeniero de Sistemas</strong> graduado con más de <strong>4 años de experiencia</strong> construyendo aplicaciones web full-stack y APIs escalables. Frontend: <strong>React, Next.js, Vite + TanStack Query</strong>. Backend: <strong>Node.js, Express, NestJS, Django, FastAPI</strong>. Bases de datos: <strong>PostgreSQL, MongoDB, MySQL</strong>. También trabajo con <strong>AWS, Firebase, Supabase</strong> e <strong>integraciones de IA/LLM</strong> (LangChain, N8N).<br/>Ex <strong>Tech Lead en Lagro</strong> (SaaS agrícola), escalando plataformas para manejar alto volumen de datos. Actualmente freelancing en <strong>Upwork</strong> como Rising Talent con más de $5K en ganancias.`,
    'about.downloadCv': 'Descargar CV',
    'about.contact': 'Contacto',
    'contact.description': 'No dudes en contactarme para cualquier consulta, colaboración u oportunidad.',
    'projects.viewMore': 'Ver Más Proyectos',
    'projects.viewCode': 'Ver Código',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.screenshotAlt': 'Captura del proyecto',
    'projects.allTitle': 'Todos los proyectos en los que he trabajado',
    'meta.title': 'Portafolio de Moisés Jimenez - Ingeniero de Sistemas',
    'meta.description': 'Contrata a Moisés Jimenez para crear tu aplicación web. Desarrollador e Ingeniero de Sistemas especializado en la creación de aplicaciones y soluciones creativas.',
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
