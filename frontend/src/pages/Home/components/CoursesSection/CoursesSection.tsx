import React from "react";
import styles from "./CoursesSection.module.css";
import { type CourseCard } from "./CoursesSection.types";

import image15 from "../../../../assets/image15.jpg";
import image16 from "../../../../assets/image16.jpg";
import image17 from "../../../../assets/image17.jpg";

const courses: CourseCard[] = [
  {
    title: "Service Process Automation",
    image: image15,
    description:
      "Equip your team to streamline customer operations with low-code automation tools such as Power Automate and Make. Identify inefficiencies through workflow analysis, then design automated response systems and dashboards — all without programming expertise. The result: a measurable improvement in efficiency, accuracy, and ROI across your service department.",
  },
  {
    title: "AI-Powered Customer Service Systems",
    image: image16,
    description:
      "Master the use of AI to detect service issues before they escalate and respond automatically with accuracy and empathy. Integrate chatbots, data-driven insights, and workflow automation into a unified service framework that improves both speed and quality. Certified final project: a customized AI service blueprint tailored to your team's workflows.",
  },
  {
    title: "AI-Enhanced Customer Communication Program",
    image: image17,
    description:
      "Equip your team to use advanced conversational models responsibly and effectively across all customer channels. Learn to build scalable AI-driven response systems that enhance personalization, ensure accuracy, and maintain brand consistency worldwide. Certified outcome: a complete customer service Copilot framework featuring automation best practices, tone alignment, and a ready-to-deploy proof of concept.",
  },
  {
    title: "Customer Service Strategy & Insights",
    image: image17,
    description:
      "Develop the ability to make data-informed service decisions without needing a technical background. Learn to evaluate performance dashboards, question AI-generated insights, and use narrative reporting to align teams and strategy. Certified outcome: a mini-case study translating customer data into an actionable improvement plan.",
  },
  {
    title: "Sustainability and Customer Impact Program",
    image: image17,
    description:
      "Master the foundations of sustainable customer operations and ethical performance reporting. Explore key topics such as carbon-conscious service processes, transparency in communication, and measurable accountability. Certified deliverable: a practical, audit-ready sustainability framework tailored for customer service departments.",
  },
  {
    title: "Digital Service Leadership Essentials",
    image: image17,
    description:
      "Gain a clear understanding of how next-generation technologies are reshaping customer interactions, data security, and service strategy. Through case studies and scenario planning, you’ll identify where digital transformation can deliver measurable value. Certified outcome: a strategic readiness plan to future-proof your customer service department.",
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      {courses.map((course, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src={course.image}
              alt={course.title}
              className={styles.image}
            />
          </div>

          <h3 className={styles.title}>{course.title}</h3>
          <p className={styles.description}>{course.description}</p>
        </div>
      ))}
    </section>
  );
};

export default CoursesSection;
