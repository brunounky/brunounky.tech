 "use client";

 import React, { useState, useEffect } from 'react';
 import Image from "next/image";
 import styles from "./page.module.css";

 const CodeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
 const ServerIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect><line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line><line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line></svg>;
 const MobileIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect><line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line></svg>;
 const DatabaseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
 const IotIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.24 7.76C15.07 6.59 13.53 6 12 6C10.47 6 8.93 6.59 7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.07 4.93C17.31 3.17 14.75 2 12 2C9.25 2 6.69 3.17 4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>;
 const MethodologyIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><polyline points="13 2 13 9 20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline></svg>;


 const portfolioData = {
  name: "Bruno Unky",
  roles: ["Desenvolvedor de Software", "Arquiteto de Soluções", "Criador de Experiências Digitais"],
  heroTagline: "Construindo o futuro da web, uma linha de código de cada vez.",
  about: {
    imageUrl: "/perfil.jpeg",
    bio: "Minha paixão pela tecnologia floresceu em 2013, com as primeiras linhas de HTML. O que começou como curiosidade evoluiu para uma busca incessante por conhecimento, dominando CSS e JavaScript, e me levando a criar minhas próprias ferramentas em C++ em 2016. A formação técnica em 2017 expandiu meu arsenal com Delphi, Kotlin e IoT, enquanto a graduação em 2022 solidificou minha expertise em arquiteturas multiplataforma com PHP, Python, Node, React e Dart. Hoje, com uma base sólida em metodologias ágeis e gerenciamento de projetos, meu foco é traduzir desafios complexos de negócios em soluções de software robustas, intuitivas e de alto impacto."
  },
  trajectory: [
    { year: "2013", title: "O Ponto de Partida", description: "Iniciei minha jornada no desenvolvimento web, desvendando o potencial do HTML e dando os primeiros passos na criação para a internet." },
    { year: "2016", title: "Autodidata e Criador de Ferramentas", description: "Comecei a desenvolver soluções para problemas pessoais, como calculadoras em C++ e sistemas de organização, aplicando a lógica de programação na prática." },
    { year: "2017", title: "Formação Técnica e Expansão de Horizontes", description: "Ingressei no curso técnico em informática, aprofundando em JavaScript e explorando novas fronteiras com Delphi, Kotlin e integrações com IoT." },
    { year: "2022", title: "Graduação e Arquitetura Multiplataforma", description: "Iniciei a graduação em Desenvolvimento de Software Multiplataforma, dominando ecossistemas como React, Node.js, Python e Dart, além de bancos de dados SQL e NoSQL." },
    { year: "2024", title: "Da Teoria à Prática Profissional", description: "Passei a aplicar meu vasto conhecimento para resolver desafios de mercado, entregando projetos complexos para clientes em diversas áreas de negócio." },
  ],
  skills: {
    "Frontend": [
      { name: "React & Next.js", icon: <CodeIcon /> },
      { name: "JavaScript (ES6+)", icon: <CodeIcon /> },
      { name: "TypeScript", icon: <CodeIcon /> },
      { name: "HTML5 & CSS3", icon: <CodeIcon /> },
    ],
    "Backend": [
      { name: "Node.js", icon: <ServerIcon /> },
      { name: "Python", icon: <ServerIcon /> },
      { name: "PHP", icon: <ServerIcon /> },
      { name: "Delphi", icon: <ServerIcon /> },
    ],
    "Mobile": [
      { name: "Dart & Flutter", icon: <MobileIcon /> },
      { name: "React Native", icon: <MobileIcon /> },
      { name: "Kotlin", icon: <MobileIcon /> },
    ],
    "Bancos de Dados": [
      { name: "SQL (PostgreSQL, MySQL)", icon: <DatabaseIcon /> },
      { name: "NoSQL (MongoDB, Firebase)", icon: <DatabaseIcon /> },
    ],
    "IoT & Ferramentas": [
        { name: "Arduino & ESP", icon: <IotIcon /> },
        { name: "Docker", icon: <IotIcon /> },
        { name: "Git", icon: <IotIcon /> },
    ],
    "Metodologias": [
        { name: "Gerenciamento de Projetos", icon: <MethodologyIcon /> },
        { name: "Metodologias Ágeis (Scrum)", icon: <MethodologyIcon /> },
    ]
  },
  projects: [
    {
      title: "Sistema de Gestão Imobiliária",
      category: "Web",
      imageUrl: "https://placehold.co/600x400/1a1829/e2e8f0?text=Gestão+Imobiliária",
      description: "Plataforma web completa para corretores e imobiliárias gerenciarem carteira de clientes, imóveis, agendamentos e propostas comerciais.",
      technologies: ["PHP", "Laravel", "MySQL", "React", "JavaScript"],
      liveUrl: "#",
    },
    {
      title: "Controle de Tomadas por App",
      category: "IoT",
      imageUrl: "https://placehold.co/600x400/1a1829/e2e8f0?text=Automação+IoT",
      description: "Solução de automação residencial que permite ligar e desligar tomadas remotamente via aplicativo mobile, utilizando Arduino e comunicação em tempo real.",
      technologies: ["Arduino", "Kotlin", "Firebase", "Node.js"],
      liveUrl: "#",
    },
    {
      title: "App de Balanço de Estoque",
      category: "Mobile",
      imageUrl: "https://placehold.co/600x400/1a1829/e2e8f0?text=Balanço+de+Estoque",
      description: "Aplicativo móvel para otimizar o processo de contagem de estoque e realização de balanços, com leitura de código de barras e sincronização offline.",
      technologies: ["Dart", "Flutter", "SQLite", "API REST"],
      liveUrl: "#",
    },
    {
      title: "Sistema de Comandas para Restaurantes",
      category: "Web",
      imageUrl: "https://placehold.co/600x400/1a1829/e2e8f0?text=Comanda+Digital",
      description: "Sistema web interativo para gerenciamento de pedidos em restaurantes, com painéis para cozinha, garçons e caixa, utilizando WebSockets para atualizações ao vivo.",
      technologies: ["Node.js", "React", "WebSocket", "PostgreSQL"],
      liveUrl: "#",
    },
    {
      title: "Monitoramento de Quadros de Energia",
      category: "IoT",
      imageUrl: "https://placehold.co/600x400/1a1829/e2e8f0?text=Monitoramento+Energia",
      description: "Sistema embarcado para monitorar temperatura e umidade em quadros de energia, com automações para acionar sistemas de ventilação e prevenir falhas.",
      technologies: ["Python", "Raspberry Pi", "MQTT", "Grafana"],
      liveUrl: "#",
    },
    {
      title: "Plataforma de Ingressos para Eventos",
      category: "Web",
      imageUrl: "https://placehold.co/600x400/1a1829/e2e8f0?text=Ingressos+Online",
      description: "Aplicação web para venda e emissão de ingressos digitais (com QR Code) para eventos, com integração de pagamento e área de gerenciamento para organizadores.",
      technologies: ["React", "Next.js", "Stripe", "Vercel"],
      liveUrl: "#",
    },
  ],
  contactEmail: "contato@brunounky.tech",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/seu-usuario/",
    github: "https://github.com/seu-usuario",
  },
 };


 const TypingEffect = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles [index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500); return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false); setIndex((prev) => (prev + 1) % roles.length); return;
    }
    const timeout = setTimeout(() => { setSubIndex((prev) => prev + (reverse ? -1 : 1)); }, reverse ? 75 : 150);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);

  return <span className={styles.heroRole}>{`${roles [index].substring(0, subIndex)}`}</span>;
 };

 const ProjectFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className={styles.projectFilter}>
      {categories.map(category => (
        <button key={category} className={`${styles.filterButton} ${selectedCategory === category ? styles.activeFilter : ''}`} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
 };


 export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const projectCategories = ['Todos', ...new Set(portfolioData.projects.map(p => p.category))];
  const filteredProjects = selectedCategory === 'Todos' ? portfolioData.projects : portfolioData.projects.filter(p => p.category === selectedCategory);

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroName}>{portfolioData.name}</h1>
          <TypingEffect roles={portfolioData.roles} />
          <p className={styles.heroTagline}>{portfolioData.heroTagline}</p>
          <a href={`mailto:${portfolioData.contactEmail}`} className={styles.heroButton}>Entre em Contato</a>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section id="about" className={`${styles.aboutSection} ${styles.hasRadialGradient}`}>
          <div className={styles.aboutBio}>
            <Image src={portfolioData.about.imageUrl} alt={`Foto de ${portfolioData.name}`} width={160} height={160} className={styles.profileImage} />
            <h2 className={styles.sectionTitle}>Quem Sou Eu</h2>
            <p className={styles.aboutText}>{portfolioData.about.bio}</p>
          </div>
          <div className={styles.aboutTrajectory}>
            <h3 className={styles.trajectoryTitle}>Minha Trajetória</h3>
            <div className={styles.timeline}>
              {portfolioData.trajectory.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineContent}><h4>{item.title}</h4><p>{item.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className={`${styles.skillsSection} ${styles.hasRadialGradient}`}>
          <h2 className={styles.sectionTitle}>Meu Arsenal de Tecnologias</h2>
          <div className={styles.skillsContainer}>
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                <div className={styles.skillsGrid}>
                  {skills.map((skill, index) => (
                    <div key={index} className={styles.skillCard}>
                      <div className={styles.skillIcon}>{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className={styles.projectsSection}>
          <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
          <ProjectFilter categories={projectCategories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => (
              <a key={index} href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                   <Image src={project.imageUrl} alt={`Imagem do projeto ${project.title}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.projectImage} />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                   <p className={styles.projectCategory}>{project.category}</p>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.technologies.slice(0, 4).map((tech, i) => (<span key={i} className={styles.techTag}>{tech}</span>))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2 className={styles.footerTitle}>Vamos criar algo incrível juntos?</h2>
          <p>Estou disponível para novos projetos e colaborações.</p>
          <a href={`mailto:${portfolioData.contactEmail}`} className={styles.heroButton}>{portfolioData.contactEmail}</a>
          <div className={styles.socialLinks}>
            <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} {portfolioData.name}. </p>
        </div>
      </footer>
    </div>
  );
 }
 