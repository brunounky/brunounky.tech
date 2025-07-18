import Image from "next/image";
import styles from "./page.module.css";


const portfolioData = {
  name: "Bruno Unky",
  role: "Desenvolvedor de Software & Criador de Soluções Digitais",
  about: "Sou um desenvolvedor apaixonado por transformar ideias complexas em soluções de software elegantes e eficientes. Com foco em código limpo e design centrado no usuário, meu objetivo é criar produtos que não apenas funcionem perfeitamente, mas que também proporcionem uma experiência excepcional.",
  contactEmail: "contato@brunounky.tech",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/seu-usuario/",
    github: "https://github.com/seu-usuario",
  },
  projects: [
    {
      title: "Sistema de Gestão de Clientes",
      description: "Plataforma web completa (SaaS) para gerenciamento de clientes, projetos e faturamento, construída com as mais modernas tecnologias.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
      imageUrl: "https://placehold.co/600x400/1a1a2e/e0e0e0?text=Projeto+1",
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Aplicativo Mobile de E-commerce",
      description: "App de compras para iOS e Android com catálogo de produtos, carrinho de compras e integração com gateway de pagamento.",
      technologies: ["React Native", "Firebase", "Stripe"],
      imageUrl: "https://placehold.co/600x400/1a1a2e/e0e0e0?text=Projeto+2",
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "API de Análise de Dados",
      description: "API RESTful de alta performance para processamento e análise de grandes volumes de dados em tempo real.",
      technologies: ["Python", "FastAPI", "Redis", "Docker"],
      imageUrl: "https://placehold.co/600x400/1a1a2e/e0e0e0?text=Projeto+3",
      liveUrl: "#",
      repoUrl: "#",
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>{portfolioData.name}</h1>
        <p className={styles.heroSubtitle}>{portfolioData.role}</p>
        <a href="#projects" className={styles.ctaButton}>
          Ver meus projetos
        </a>
      </header>

      <main>
        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>Sobre Mim</h2>
            <p className={styles.aboutText}>{portfolioData.about}</p>
          </div>
          <div className={styles.aboutImageContainer}>
            <Image
              src="https://placehold.co/400x400/1a1a2e/e0e0e0?text=Sua+Foto"
              alt="Foto de perfil de Bruno Unky"
              width={200}
              height={200}
              className={styles.profileImage}
            />
          </div>
        </section>

        <section id="projects" className={styles.projectsSection}>
          <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
          <div className={styles.projectsGrid}>
            {portfolioData.projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <Image
                  src={project.imageUrl}
                  alt={`Imagem do projeto ${project.title}`}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    {project.liveUrl !== "#" && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Ver ao vivo</a>}
                    {project.repoUrl !== "#" && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Repositório</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <h2 className={styles.sectionTitle}>Vamos Conversar?</h2>
        <p>Estou sempre aberto a novas oportunidades e colaborações.</p>
        <a href={`mailto:${portfolioData.contactEmail}`} className={`${styles.ctaButton} ${styles.footerButton}`}>
          {portfolioData.contactEmail}
        </a>
        <div className={styles.socialLinks}>
          <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
