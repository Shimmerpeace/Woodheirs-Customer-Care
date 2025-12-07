import styles from "./Question.module.css";

const Question: React.FC = () => {
  return (
    <section className={styles.question}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.titleLine}>
          Why do many organizations struggle with customer loyalty?
        </h1>
        <h1 className={styles.titleLine}>
          Because they handle today's service demands with{" "}
        </h1>
        <h1 className={styles.titleLine}>yesterday's standards.</h1>
      </div>

      <div className={styles.divider} />

      <div className={styles.subtitle}>
        <p>
          WoodHeirs Customer Service Training institute bridges the service gap.
          Through training paths that pinpoint real challenges, not just surface
          skills. Through results-driven courses that build competence fast. And
          through frameworks that turn inconsistent service into consistent
          growth.
        </p>
      </div>
    </section>
  );
};

export default Question;
