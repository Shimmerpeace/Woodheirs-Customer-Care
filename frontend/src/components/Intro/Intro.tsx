// Intro.tsx
import styles from "./Intro.module.css";
// import { type IntroProps } from "./Intro.types";

const Intro: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Customer Service Excellence Training and Certification.
        </h1>
        <p className={styles.text}>
          Building and maintaining successful customer relationships is a
          complex and ongoing process that requires a deep understanding of
          customer needs.
        </p>
      </div>
    </section>
  );
};

export default Intro;

/**
const Intro: React.FC<IntroProps> = () => { return (); };
export default Intro;
 */
