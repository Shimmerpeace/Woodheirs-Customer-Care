// CertificationsSection.tsx
import styles from "./Certifications.module.css";
import { type Certification } from "./Certifications.types";

const certifications: Certification[] = [
  {
    title: "CCSM",
    description: "Certified Customer Service Manager: Enhance leadership, confidence, and fulfillment at work."
  },
  {
    title: "CCEP",
    description: "Certified Customer Experience Professional: Deepen your expertise in customer experience and drive results."
  }
];

export default function Certifications () {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Our Certifications
      </h2>
        <h3>We offer courses on:</h3>
      <div className={styles.grid}>
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{cert.title}</h3>
            <p className={styles.cardDescription}>{cert.description}</p>
          </div>
        ))}
      </div>
       <a href="/contact">
          Contact Us
        </a>
    </section>
  );
}