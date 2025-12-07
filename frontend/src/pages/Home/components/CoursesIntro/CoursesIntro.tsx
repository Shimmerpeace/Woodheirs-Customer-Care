import styles from "./CoursesIntro.module.css";
import { type CoursesIntroContent } from "./CoursesIntro.types";

const content: CoursesIntroContent[] = [
  {
    titlePart1: "The",
    highlight: "next-generation service skills ",
    titlePart2: " — practical, measurable, and business-ready.",
    subtitle:
      "Discover our certified training portfolio: from advanced customer interaction and digital service tools to leadership in client relations. Each path translates theory into daily action, helping teams build consistency, confidence, and measurable results. For organizations that value performance, not just participation.",
  },
];

const CoursesIntro: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay} />

      <div className={styles.textWrapper}>
        {/** Since the array only has one element, it can be accessed through index 0 */}
        <h1 className={styles.title}>
          {content[0].titlePart1}
          <span className={styles.highlight}> {content[0].highlight} </span>
          {content[0].titlePart2}
        </h1>

        <p className={styles.subtitle}>{content[0].subtitle}</p>
      </div>
    </section>
  );
};

export default CoursesIntro;
