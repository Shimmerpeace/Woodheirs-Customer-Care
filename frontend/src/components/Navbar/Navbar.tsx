"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import { type NavItem } from "./Navbar.types";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Certifications", href: "/certifications" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Notifications", href: "/notifications" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.brand}>
          WoodHeirs Customer Service Training
        </a>
        <div>
          <button className={styles.loginButton}>Apply Now</button>
        </div>
      </header>

      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="/" className={styles.logo}>
            LOGO
          </a>

          <ul className={`${styles.navLinks} ${styles.desktopOnly}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
