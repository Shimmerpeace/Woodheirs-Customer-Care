import { motion, type Variants } from "framer-motion";
import styles from "./ProblemsSolutions.module.css";
import { type InfoCard } from "./ProblemsSolutions.types";

const problems: InfoCard[] = [
  {
    title:
      "Problem 1: The customer landscape is evolving — service skills and communication methods are falling behind.",
    description:
      "Manual processes, slow response times, and inconsistent interactions create friction that costs businesses loyalty and trust.",
    type: "problem",
  },
  {
    title: "Problem 2: Traditional training falls short — theory dominates, practice disappears.",
    description:
      "Studies show most training content is never applied in daily work because it lacks relevance, feedback, and measurable outcomes.",
    type: "problem",
  },
  {
    title: "Problem 3: Busy schedules make upskilling nearly impossible.",
    description:
      "Deadlines, remote operations, and unpredictable workloads block time for traditional workshops or full-day training events.",
    type: "problem",
  },
];

const solutions: InfoCard[] = [
  {
    title:
      "Solution: Our institute equips teams with adaptive customer service strategies backed by industry best practices.",
    description:
      "Our targeted training paths close performance gaps in weeks, not years — ensuring every representative delivers measurable results.",
    type: "solution",
  },
  {
    title: "Solution: Skill-based modules, personalized feedback, and live mentoring.",
    description:
      "Every session results in a concrete outcome — refined service scripts, improved call handling, or measurable CSAT gains. ROI from week 5.",
    type: "solution",
  },
  {
    title: "Solution: Flexible learning, built for modern teams.",
    description:
      "Our on-demand micro modules deliver focused training in minutes, accessible anytime, on any device. Seat-based subscriptions scale with your team, ensuring zero downtime and continuous growth.",
    type: "solution",
  },
];

// Reusable card animation settings
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const IconRedX = () => (
  <svg
    className={`${styles.icon} ${styles.problemIcon}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconCheck = () => (
  <svg
    className={`${styles.icon} ${styles.solutionIcon}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ProblemsSolutions: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* ----- PROBLEMS SECTION ANIMATED ----- */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {problems.map((p, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ scale: 1.03, translateY: -6 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            <IconRedX />
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.description}>{p.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ----- SOLUTIONS SECTION ANIMATED ----- */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {solutions.map((s, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ scale: 1.03, translateY: -6 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            <IconCheck />
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.description}>{s.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProblemsSolutions;
