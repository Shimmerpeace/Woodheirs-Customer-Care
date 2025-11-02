/*
"use client";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

function selectSocialIcon(url) {
  if (url.includes("whatsapp")) return <FaWhatsapp className="h-6 w-6" />;
  if (url.includes("facebook")) return <FaFacebookF className="h-6 w-6" />;
  if (url.includes("youtube")) return <FaYoutube className="h-6 w-6" />;
  if (url.includes("twitter")) return <FaTwitter className="h-6 w-6" />;
  return null;
}

export default function Footer({
  logoText,
  footerText,
  socialLinks,
  navLinks,
}) {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & copyright *
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold">{logoText}</span>
          <p className="text-gray-400 mt-2 text-sm">{footerText}</p>
        </div>
        {/* Navigation Links *
        <nav>
          <ul className="flex flex-wrap items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Social Icons *
        <div className="flex items-center space-x-4 mt-6 md:mt-0">
          {socialLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-white hover:text-gray-300"
              aria-label={`Visit us at ${link.label}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectSocialIcon(link.href)}
              <span className="sr-only">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
      {/* Legal Links (optional) *
      <div className="container mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <span>
          &copy; {new Date().getFullYear()} WoodHeirs. All rights reserved.
        </span>
        <div className="mt-2 md:mt-0 space-x-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
*/


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

