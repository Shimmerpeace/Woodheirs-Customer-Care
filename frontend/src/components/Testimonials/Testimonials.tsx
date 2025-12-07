"use client";
import { useState } from "react";
import styles from './Testimonials.module.css';
import { type Testimonial } from './Testimonials.types';

const testimonials: Testimonial[] = [
  {
    text: "CSIA certification helped me advance my career and deliver a new level of service!",
    author: "- Sarah M.",
  },
  {
    text: "I've never felt more confident dealing with customers.",
    author: "- James K.",
  },
  {
    text: "Insightful, educative, and impactful. I love the experience here too.",
    author: "- Emma R.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState<number>(0);

  const prev = (): void => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = (): void => {
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        What Our Graduates Say
      </h2>
      <div className={styles.container}>
        <button
          onClick={prev}
          className={styles.prevButton}
          aria-label="Previous testimonial"
        >
          ◀
        </button>
        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>
            "{testimonials[index].text}"
          </p>
          <h4 className={styles.author}>{testimonials[index].author}</h4>
        </div>
        <button
          onClick={next}
          className={styles.nextButton}
          aria-label="Next testimonial"
        >
          ▶
        </button>
      </div>
    </section>
  );
}