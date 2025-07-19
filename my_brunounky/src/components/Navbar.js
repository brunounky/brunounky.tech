"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';

const Logo = () => (
  <svg height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="/my_brunounky/public/logo.svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
  </svg>
);

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Logo />
          <span>Bruno Unky</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/#about">Quem Sou</Link>
          <Link href="/#skills">Habilidades</Link>
          <Link href="/#projects">Projetos</Link>
          <a href="/certificacoes" onClick={(e) => e.preventDefault()} className={styles.disabledLink} title="Em breve">Certificações</a>
          <a href="/contato" onClick={(e) => e.preventDefault()} className={styles.disabledLink} title="Em breve">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;