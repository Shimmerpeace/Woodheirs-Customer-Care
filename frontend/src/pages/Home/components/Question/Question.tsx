import styles from "./Question.module.css";
import image15 from "../../../../assets/image15.jpg";
import image16 from "../../../../assets/image16.jpg";

const Question: React.FC = () => {
  return (
    <section className={styles.question}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.titleLine}>
          Why do many organizations struggle with customer loyalty?
        </h1>
        <h1 className={styles.titleLine}>
          Because they handle today's service demands with yesterday's
          standards.
        </h1>
      </div>

      <div className={styles.divider} />

      <div className={styles.subtitle}>
        <div className={styles.aboutImages}>
          <div className={styles.imageStack}>
            <img
              src={image15}
              alt="Background image"
              className={styles.imageBack}
            />
            <img
              src={image16}
              alt="Front image"
              className={styles.imageFront}
            />
          </div>
        </div>
        <div className={styles.container}>
          <p>
            WoodHeirs Customer Service Training institute bridges the service
            gap. Through training paths that pinpoint real challenges, not just
            surface skills. Through results-driven courses that build competence
            fast. And through frameworks that turn inconsistent service into
            consistent growth.
          </p>
          <p>
            We are a customer service consultancy dedicated to helping you
            enhance your skills, intellect, knowledge, and experience through
            our diverse range of training programs, consultancy services,
            lectures, and seminars. Our mission is to deliver high-quality,
            practical learning solutions tailored to your customer services
            needs.
          </p>
          <p>
            We prepare you to develop and refine your professional abilities so
            you can achieve your career goals-whether as a top-performing
            customer service representative or an effective trainer. Every
            service we provide meets the highest international standards,
            ensuring you receive the best guidance and support to excel in the
            customer service industry.
          </p>
          <div className={styles.btnWrapper}>
            <button className={styles.aboutUsBtn}>Learn more about us!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
