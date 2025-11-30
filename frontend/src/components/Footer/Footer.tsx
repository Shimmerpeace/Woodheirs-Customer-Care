"use client";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import { type FooterProps } from "./Footer.types";

function selectSocialIcon(url: string) {
  if (url.includes("whatsapp")) return <FaWhatsapp className={styles.icon} />;
  if (url.includes("facebook")) return <FaFacebookF className={styles.icon} />;
  if (url.includes("youtube")) return <FaYoutube className={styles.icon} />;
  if (url.includes("twitter")) return <FaTwitter className={styles.icon} />;
  return null;
}

export default function Footer({
  logoText,
  footerText,
  socialLinks,
  navLinks,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <span className={styles.logoText}>{logoText}</span>
          <p className={styles.footerText}>{footerText}</p>
        </div>

        <nav className={styles.navSection}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.socialSection}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={styles.socialLink}
              aria-label={`Visit us at ${link.label}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectSocialIcon(link.href)}
              <span className={styles.visuallyHidden}>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.legalSection}>
        <span>
        &copy; {new Date().getFullYear()} WoodHeirs. All rights reserved.
        </span>
        <div className={styles.legalLinks}>
          <a href="/privacy" className={styles.legalLink}>
            Privacy Policy
          </a>
          <a href="/terms" className={styles.legalLink}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

