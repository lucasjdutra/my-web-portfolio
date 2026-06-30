/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import { 
  Github, 
  Linkedin, 
  FileText, 
  ExternalLink, 
  Code2, 
  Figma, 
  Mail, 
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Terminal,
  Cpu,
  Globe,
  Layout,
  Languages,
  Smartphone,
  Database
} from "lucide-react";

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      welcome: "Welcome to my portfolio"
    },
    hero: {
      badge: "Open for Strategic Collaborations",
      title1: "Crafting highly",
      title2: "responsive",
      title3: "and",
      title4: "user-centric",
      title5: " web experiences.",
      subtitlePrefix: "Hi, I'm ",
      name: "Lucas J. Dutra",
      subtitleSuffix: ", a Frontend Software Engineer passionate about merging programming with UI/UX best practices.",
      resume: "View Resume"
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my 3 best projects. Check my GitHub for more.",
      viewProject: "View Project",
      featured: "Featured Project"
    },
    skills: {
      title: "My Skills"
    },
    contact: {
      title1: "Let's build something",
      title2: "extraordinary",
      subtitle: "I am always interested in hearing about new projects and how I can help you achieve your goals.",
      cta: "Let's work together"
    },
    footer: "Developed by Lucas Dutra."
  },
  pt: {
    nav: {
      home: "Início",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
      welcome: "Bem-vindo ao meu portfolio"
    },
    hero: {
      badge: "Aberto a Colaborações Estratégicas",
      title1: "Desenvolvendo experiências web",
      title2: "responsivas",
      title3: "e focadas no",
      title4: "usuário",
      title5: ".",
      subtitlePrefix: "Olá, eu sou ",
      name: "Lucas J. Dutra",
      subtitleSuffix: ", um Engenheiro de Software Frontend apaixonado em unir programação com boas práticas de UI/UX.",
      resume: "Ver Currículo"
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Uma seleção dos meus 3 melhores projetos. Confira o restante no meu GitHub.",
      viewProject: "Ver Projeto",
      featured: "Projeto em Destaque"
    },
    skills: {
      title: "Minhas Habilidades"
    },
    contact: {
      title1: "Vamos construir algo",
      title2: "extraordinário",
      subtitle: "Sempre tenho interesse em ouvir sobre novos projetos e como posso ajudar você a alcançar seus objetivos.",
      cta: "Vamos trabalhar juntos"
    },
    footer: "Desenvolvido por Lucas Dutra."
  }
};

const PROJECTS = (t: any) => [
  {
    title: "Drip Finance",
    type: "Mobile Platform",
    description: t === 'en' ? "A comprehensive personal finance management application focused on intuitive data visualization." : "Um aplicativo abrangente de gestão de finanças pessoais focado em visualização intuitiva de dados.",
    link: "https://www.figma.com/design/7YLOE0fCnQaaBe1gt7hGQu/Drip---Finance--Copy-?node-id=0-1&t=E9drYnmKZXdJeWpr-1",
    links: [
      { label: "Figma", url: "https://www.figma.com/design/7YLOE0fCnQaaBe1gt7hGQu/Drip---Finance--Copy-?node-id=0-1&t=E9drYnmKZXdJeWpr-1" },
      { label: "Github", url: "https://github.com/thethalles/drip-finance" }
    ],
    tags: ["React", "Capacitor", "Mobile", "UI/UX", "Figma", "Fintech"],
    icon: <Layout className="w-6 h-6 text-accent" />
  },
  {
    title: "Dog Calças",
    type: "Figma Design",
    description: t === 'en' ? "E-commerce interface for pet clothing, featuring a robust design system and seamless shopping experience." : "Interface de e-commerce para roupas de pets, apresentando um design system robusto e experiência de compra fluida.",
    link: "https://www.figma.com/design/rNmZFdbwzsuRDU6RTZRebW/Design-System---DogCal%C3%A7as--Copy-?node-id=0-1&t=BiFo3VOzs7pLALFA-1",
    linkLabel: "Figma",
    tags: ["UI/UX", "Design System", "E-commerce", "Figma"],
    icon: <Figma className="w-6 h-6 text-cyan" />
  },
  {
    title: "Agenda FATEC Itu",
    type: "Web Platform",
    description: t === 'en' ? "Lead designer for the event management platform used by FATEC Itu College." : "Designer principal da plataforma de gestão de eventos usada pela FATEC Itu.",
    link: "https://agendafatecitu.vercel.app/",
    linkLabel: t === 'en' ? "Webpage" : "Página web",
    tags: ["UI/UX", "Web Design", "Accessibility"],
    icon: <Globe className="w-6 h-6 text-accent" />
  }
];

const SKILLS = [
  { name: "React", icon: <Code2 className="w-5 h-5" /> },
  { name: "React Native", icon: <Smartphone className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Terminal className="w-5 h-5" /> },
  { name: "Firebase", icon: <Database className="w-5 h-5" /> },
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "Node", icon: <Cpu className="w-5 h-5" /> },
  { name: "Java", icon: <Code2 className="w-5 h-5" /> },
  { name: "SQL", icon: <Terminal className="w-5 h-5" /> },
  { name: "Git", icon: <Github className="w-5 h-5" /> },
  { name: "Photoshop", icon: <Layout className="w-5 h-5" /> },
];

const HERO_IMAGES = [
  {
    url: img1,
    title: "Dog Calças",
    link: "https://www.figma.com/design/rNmZFdbwzsuRDU6RTZRebW/Design-System---DogCal%C3%A7as--Copy-?node-id=0-1&t=BiFo3VOzs7pLALFA-1"
  },
  {
    url: img2,
    title: "Drip Finance",
    link: "https://github.com/thethalles/drip-finance"
  },
  {
    url: img3,
    title: "Agenda FATEC",
    link: "https://agendafatecitu.vercel.app/"
  }
];

export default function App() {
  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const [scrolled, setScrolled] = useState(false);
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const t = TRANSLATIONS[lang];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const elementPosition = contactSection.getBoundingClientRect().top;
      const isMobile = window.innerWidth < 768;
      const additionalOffset = isMobile ? 120 : 60;
      const offsetPosition = elementPosition + window.scrollY + additionalOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [currentImage]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;
      
      setScrolled(scrollY > 50);
      setShowUp(scrollY > 300);
      setShowDown(scrollY < scrollHeight - innerHeight - 300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent relative overflow-x-clip">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-cyan/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-accent/5 rounded-full blur-[150px]"
        />
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-bg/80 backdrop-blur-lg border-b border-white/10 py-2 shadow-[0_0_20px_rgba(0,0,0,0.3)]" 
            : "bg-transparent border-b border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <span className={`text-xl font-bold tracking-tighter uppercase transition-colors ${scrolled ? "text-heading" : "text-heading/80"}`}>
              LUCAS<span className="text-accent">.</span>DUTRA
            </span>
            <span className="hidden lg:inline-block h-4 w-[1px] bg-white/10"></span>
            <span className={`hidden lg:inline-block text-xs font-mono text-body/60 uppercase tracking-widest transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`}>
              {t.nav.welcome}
            </span>
          </motion.div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
              <a href="#home" className="text-heading/60 hover:text-accent hover:scale-105 transition-all duration-300">{t.nav.home}</a>
              <a href="#projects" className="text-heading/60 hover:text-accent hover:scale-105 transition-all duration-300">{t.nav.projects}</a>
              <a href="#skills" className="text-heading/60 hover:text-accent hover:scale-105 transition-all duration-300">{t.nav.skills}</a>
              <a href="#contact" onClick={scrollToContact} className="text-heading/60 hover:text-accent hover:scale-105 transition-all duration-300">{t.nav.contact}</a>
            </div>
            
            <button 
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-accent/20 hover:border-accent/30 hover:text-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all text-xs font-bold text-heading cursor-pointer"
            >
              <Languages className="w-4 h-4 text-accent" />
              {lang === 'en' ? 'PT-BR' : 'EN'}
            </button>
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-32 lg:pt-20 overflow-hidden relative">
          {/* Decorative Background Element */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-1/4 -left-20 w-72 h-72 bg-cyan/5 rounded-full blur-[100px] pointer-events-none"
          ></motion.div>

          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 w-full">
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center lg:items-start"
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 border border-accent/20">
                    {t.hero.badge}
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-[1.1]">
                    {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span> {t.hero.title3} <span className="text-gradient">{t.hero.title4}</span>{t.hero.title5}
                  </h1>
                  <p className="text-lg md:text-xl text-body mb-10 max-w-2xl leading-relaxed">
                    {t.hero.subtitlePrefix}<span className="text-gradient font-bold">{t.hero.name}</span>{t.hero.subtitleSuffix}
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <a href="https://drive.google.com/file/d/1HnNRqUsFc30PnTd-Sh4PrwDCqeLWfEAz/view" target="_blank" rel="noopener noreferrer" className="btn-primary-custom flex items-center gap-2 group">
                      <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      {t.hero.resume}
                    </a>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      <a href="https://linkedin.com/in/lucasjdutra" target="_blank" rel="noopener noreferrer" className="btn-secondary-custom px-5 py-3 flex items-center gap-2.5 hover:text-accent hover:border-accent/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] group">
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm tracking-wide">LinkedIn</span>
                      </a>
                      <a href="https://github.com/lucasjdutra" target="_blank" rel="noopener noreferrer" className="btn-secondary-custom px-5 py-3 flex items-center gap-2.5 hover:text-accent hover:border-accent/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] group">
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm tracking-wide">GitHub</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  animate={{ y: [0, -15, 0] }}
                  viewport={{ once: true }}
                  transition={{ 
                    opacity: { duration: 1.2 },
                    scale: { duration: 1.2 },
                    x: { duration: 1.2 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative group w-full max-w-[560px]"
                >
                  <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden glass-card border-white/10 shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                      >
                        <a 
                          href={HERO_IMAGES[currentImage].link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full h-full cursor-pointer group/link"
                        >
                          <img 
                            src={HERO_IMAGES[currentImage].url} 
                            alt={HERO_IMAGES[currentImage].title}
                            className={`w-full h-full object-cover object-center transition-transform duration-700 group-hover/link:scale-110 ${currentImage === 0 ? 'scale-[1.08]' : ''}`}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent"></div>
                          <div className="absolute bottom-8 left-8">
                            <p className="text-[10px] font-bold text-white bg-accent/90 px-2 py-0.5 rounded mb-2 w-fit uppercase tracking-wider shadow-lg">
                              {t.projects.featured}
                            </p>
                            <h3 className="text-2xl font-bold text-heading group-hover/link:text-accent transition-colors drop-shadow-md">{HERO_IMAGES[currentImage].title}</h3>
                          </div>
                        </a>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevImage(); }}
                        className="p-3 rounded-full bg-bg/40 backdrop-blur-md border border-white/10 text-white hover:bg-accent hover:border-accent transition-all cursor-pointer pointer-events-auto"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextImage(); }}
                        className="p-3 rounded-full bg-bg/40 backdrop-blur-md border border-white/10 text-white hover:bg-accent hover:border-accent transition-all cursor-pointer pointer-events-auto"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-8 right-8 flex gap-2 z-20">
                      {HERO_IMAGES.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImage(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            currentImage === i ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
              </div>
            </div>
          </div>

        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center py-32 bg-surface/30 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-16">
                <motion.div key={`title-${lang}`}>
                  <h2 className="text-3xl md:text-4xl mb-4">{t.projects.title}</h2>
                  <p className="text-body max-w-2xl">{t.projects.subtitle}</p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS(lang).map((project, index) => {
                  const cardContent = (
                    <>
                      <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500">
                        {project.icon}
                      </div>
                      <span className="text-xs font-mono text-cyan mb-2 uppercase tracking-widest">{project.type}</span>
                      <h3 className="text-xl mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-body text-sm mb-8 min-h-[80px] leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-heading/60 uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.links ? (
                        <div className="flex gap-6 mt-auto justify-center w-full">
                          {project.links.map(lnk => (
                            <a 
                              key={lnk.label}
                              href={lnk.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm font-bold text-accent hover:text-cyan transition-colors cursor-pointer z-10"
                            >
                              {lnk.label} <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center text-sm font-bold text-accent group-hover:text-cyan transition-colors mt-auto w-full">
                          {project.linkLabel || t.projects.viewProject} <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                      )}
                    </>
                  );

                  return (
                    <motion.div 
                      key={`${project.title}-${lang}`}
                      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.2, 
                        delay: index * 0.15,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="h-full"
                    >
                      {project.links ? (
                        <div className="glass-card p-8 h-full flex flex-col items-center text-center group hover:border-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
                          {cardContent}
                        </div>
                      ) : (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="glass-card p-8 h-full flex flex-col items-center text-center group hover:border-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
                        >
                          {cardContent}
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className="min-h-screen flex items-center py-32 relative">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h2 key={`skills-title-${lang}`} className="text-3xl md:text-4xl mb-16">{t.skills.title}</motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="glass-card p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300"
                  >
                    <span className="text-accent">{skill.icon}</span>
                    <span className="font-mono text-xs font-medium text-heading text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[70vh] flex items-center pt-24 pb-32 md:pt-32 md:pb-12 bg-surface/30 relative">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto glass-card p-10 md:p-20 border-accent/20"
            >
              <motion.div key={`contact-${lang}`}>
                <h2 className="text-4xl md:text-6xl mb-8">{t.contact.title1} <span className="text-gradient">{t.contact.title2}</span>.</h2>
                <p className="text-xl text-body mb-12">
                  {t.contact.subtitle}
                </p>
              </motion.div>
              <a href="mailto:lucasjdc90@gmail.com" className="btn-primary-custom inline-flex items-center gap-3 text-lg">
                <Mail className="w-6 h-6" />
                {t.contact.cta}
              </a>
              
              <div className="mt-16 flex justify-center gap-8">
                <a href="https://linkedin.com/in/lucasjdutra" target="_blank" rel="noopener noreferrer" className="text-body hover:text-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-accent/30">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="https://github.com/lucasjdutra" target="_blank" rel="noopener noreferrer" className="text-body hover:text-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-accent/30">
                  <Github className="w-5 h-5" /> GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-12 bg-surface/30">
        <div className="container mx-auto px-6 text-center text-sm text-body/60">
          <p>© {new Date().getFullYear()} {t.footer}</p>
        </div>
      </footer>

      {/* Mobile Quick Navigation */}
      <div className="md:hidden fixed bottom-6 left-6 flex flex-col gap-3 z-50">
        <AnimatePresence>
          {showUp && (
            <motion.a 
              key="btn-up"
              initial={{ opacity: 0, x: -20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.5 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              href="#home" 
              className="p-3.5 rounded-full bg-accent/90 text-white shadow-lg shadow-accent/20 backdrop-blur-md border border-white/20 active:scale-90 transition-all"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.a>
          )}
          {showDown && (
            <motion.a 
              key="btn-down"
              initial={{ opacity: 0, x: -20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.5 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              href="#contact" 
              onClick={scrollToContact}
              className="p-3.5 rounded-full bg-surface/80 text-heading shadow-lg backdrop-blur-md border border-white/10 active:scale-90 transition-all"
              aria-label="Scroll to bottom"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
