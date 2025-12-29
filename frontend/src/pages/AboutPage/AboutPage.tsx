/*
import React from "react";
import styles from "./AboutPage.module.css";
import type {
  AboutPageProps,
  StatItem,
  ValueItem,
  TimelineItem,
} from "./AboutPage.types";

const AboutPage: React.FC<AboutPageProps> = ({
  instituteName = "WoodHeirs Customer Service Training Institute",
  heroTagline = "Elevating customer care into a strategic advantage.",
  heroSubtext = "We train future-ready support teams to listen deeper, resolve faster, and build lasting customer relationships.",

  stats = [
    { label: "Professionals trained", value: "4,500+" },
    { label: "Countries served", value: "12" },
    { label: "Average CSAT uplift", value: "+28%" },
  ],
  values = [
    {
      title: "Human-first",
      description:
        "Every interaction starts with empathy, active listening, and respect.",
    },
    {
      title: "Continuous learning",
      description:
        "Curricula evolve with customer expectations, AI, and digital tools.",
    },
    {
      title: "Measurable impact",
      description:
        "Programs are designed around clear, trackable business outcomes.",
    },
  ],
  timeline = [
    {
      year: "2018",
      title: "Founded to modernize support",
      description:
        "Launched with a vision to close the gap between traditional call centers and modern, omnichannel experience teams.",
    },
    {
      year: "2020",
      title: "Scaling digital programs",
      description:
        "Introduced remote-first training formats, blended learning, and scenario-based simulations.",
    },
    {
      year: "2023",
      title: "AI-enhanced coaching",
      description:
        "Integrated conversational AI and analytics into training to sharpen live support performance.",
    },
  ],
  showCallToAction = true,
  primaryActionLabel = "Explore training programs",
  onPrimaryActionClick,
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryActionClick) onPrimaryActionClick();
  };

  return (
    <main className={styles.aboutPage}>
      <div className={styles.pageInner}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>About {instituteName}</span>
            <h1 className={styles.heroTitle}>{heroTagline}</h1>
            <p className={styles.heroSubtitle}>{heroSubtext}</p>
            {showCallToAction && (
              <button
                type="button"
                className={styles.heroButton}
                onClick={handlePrimaryClick}
              >
                {primaryActionLabel}
              </button>
            )}
          </div>
          <div className={styles.heroHighlightCard}>
            <p className={styles.heroHighlightTitle}>
              Training built for modern customer expectations
            </p>
            <p className={styles.heroHighlightText}>
              From onboarding to advanced coaching, our programs blend
              role-playing, simulations, and real-world case studies to help
              teams deliver consistent, human-centered support across every
              channel.
            </p>
          </div>
        </section>

        
        <section className={styles.statsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Impact in numbers</h2>
            <p className={styles.sectionSubtitle}>
              A track record of transforming support teams into trusted customer
              experience partners.
            </p>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((stat: StatItem) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

     
        <section className={styles.storySection}>
          <div className={styles.storyContent}>
            <h2 className={styles.sectionTitle}>Our story</h2>
            <p className={styles.sectionSubtitle}>
              {instituteName} was created for organizations that believe
              customer service is not a cost center, but a powerful driver of
              loyalty, revenue, and brand reputation.
            </p>
            <p className={styles.paragraph}>
              Traditional support training often stops at scripts and tools. We
              go deeper, helping teams understand the full customer journey,
              practice difficult conversations, and build the confidence to
              handle complex situations with calm and clarity.
            </p>
            <p className={styles.paragraph}>
              Today, we partner with growing startups and established
              enterprises alike, designing tailored programs that align with
              their culture, technology stack, and key customer experience
              metrics.
            </p>
          </div>
          <div className={styles.storySideCard}>
            <h3 className={styles.storySideTitle}>What we specialize in</h3>
            <ul className={styles.storyList}>
              <li>Customer support onboarding academies</li>
              <li>Soft skills: empathy, de-escalation, active listening</li>
              <li>Omnichannel communication (email, chat, voice, social)</li>
              <li>Help desk workflows and quality assurance coaching</li>
              <li>Customer experience mindset and leadership programs</li>
            </ul>
          </div>
        </section>

        
        <section className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Values that guide us</h2>
            <p className={styles.sectionSubtitle}>
              Every workshop, coaching session, and curriculum is designed
              around these core principles.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value: ValueItem) => (
              <article key={value.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

       
        <section className={styles.timelineSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How we evolved</h2>
            <p className={styles.sectionSubtitle}>
              From a small training studio to a strategic partner for global
              customer care teams.
            </p>
          </div>
          <ol className={styles.timelineList}>
            {timeline.map((item: TimelineItem) => (
              <li key={item.year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        
        <section className={styles.closingSection}>
          <div className={styles.closingCard}>
            <h2 className={styles.sectionTitle}>
              Ready to level up your team?
            </h2>
            <p className={styles.sectionSubtitle}>
              Let’s design a customer care training journey that fits your
              team’s reality, tools, and growth goals.
            </p>
            {showCallToAction && (
              <button
                type="button"
                className={styles.heroButton}
                onClick={handlePrimaryClick}
              >
                {primaryActionLabel}
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
*/

import React from "react";
import styles from "./AboutPage.module.css";
import type {
  AboutPageProps,
  StatItem,
  ValueItem,
  TimelineItem,
} from "./AboutPage.types";

const AboutPage: React.FC<AboutPageProps> = ({
  instituteName = "WoodHeirs Customer Service Training Institute",
  heroTagline = "Elevating customer care into a strategic advantage.",
  heroSubtext = "We train future-ready support teams to listen deeper, resolve faster, and build lasting customer relationships.",

  stats = [
    { label: "Professionals trained", value: "4,500+" },
    { label: "Countries served", value: "12" },
    { label: "Average CSAT uplift", value: "+28%" },
  ],
  values = [
    {
      title: "Human-first",
      description:
        "Every interaction starts with empathy, active listening, and respect.",
    },
    {
      title: "Continuous learning",
      description:
        "Curricula evolve with customer expectations, AI, and digital tools.",
    },
    {
      title: "Measurable impact",
      description:
        "Programs are designed around clear, trackable business outcomes.",
    },
  ],
  timeline = [
    {
      year: "2018",
      title: "Founded to modernize support",
      description:
        "Launched with a vision to close the gap between traditional call centers and modern, omnichannel experience teams.",
    },
    {
      year: "2020",
      title: "Scaling digital programs",
      description:
        "Introduced remote-first training formats, blended learning, and scenario-based simulations.",
    },
    {
      year: "2023",
      title: "AI-enhanced coaching",
      description:
        "Integrated conversational AI and analytics into training to sharpen live support performance.",
    },
  ],
  showCallToAction = true,
  primaryActionLabel = "Explore training programs",
  onPrimaryActionClick,
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryActionClick) onPrimaryActionClick();
  };

  return (
    <main className={styles.aboutPage}>
      <div className={styles.pageInner}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>About {instituteName}</span>
            <h1 className={styles.heroTitle}>{heroTagline}</h1>
            <p className={styles.heroSubtitle}>{heroSubtext}</p>
            {showCallToAction && (
              <button
                type="button"
                className={styles.heroButton}
                onClick={handlePrimaryClick}
              >
                {primaryActionLabel}
              </button>
            )}
          </div>
          <div className={styles.heroHighlightCard}>
            <p className={styles.heroHighlightTitle}>
              Training built for modern customer expectations
            </p>
            <p className={styles.heroHighlightText}>
              From onboarding to advanced coaching, our programs blend
              role-playing, simulations, and real-world case studies to help
              teams deliver consistent, human-centered support across every
              channel.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Impact in numbers</h2>
            <p className={styles.sectionSubtitle}>
              A track record of transforming support teams into trusted customer
              experience partners.
            </p>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((stat: StatItem) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className={styles.storySection}>
          <div className={styles.storyContent}>
            <h2 className={styles.sectionTitle}>Our story</h2>
            <p className={styles.sectionSubtitle}>
              {instituteName} was created for organizations that believe
              customer service is not a cost center, but a powerful driver of
              loyalty, revenue, and brand reputation.
            </p>
            <p className={styles.paragraph}>
              Traditional support training often stops at scripts and tools. We
              go deeper, helping teams understand the full customer journey,
              practice difficult conversations, and build the confidence to
              handle complex situations with calm and clarity.
            </p>
            <p className={styles.paragraph}>
              Today, we partner with growing startups and established
              enterprises alike, designing tailored programs that align with
              their culture, technology stack, and key customer experience
              metrics.
            </p>
          </div>

          <div className={styles.storySideCard}>
            <h3 className={styles.storySideTitle}>What we specialize in</h3>
            <ul className={styles.storyList}>
              <li>Customer support onboarding academies</li>
              <li>Soft skills: empathy, de-escalation, active listening</li>
              <li>Omnichannel communication (email, chat, voice, social)</li>
              <li>Help desk workflows and quality assurance coaching</li>
              <li>Customer experience mindset and leadership programs</li>
            </ul>
          </div>
        </section>

        {/* Capabilities */}
        <section className={styles.capabilitiesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our capabilities</h2>
            <p className={styles.sectionSubtitle}>
              Structured support for every stage of your customer service
              journey.
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {/* RESEARCH AND INSIGHT */}
            <article className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Research and insight</h3>
              <p className={styles.capabilityDescription}>
                WoodHeirs provides an independent, expert perspective on the key
                and immediate issues affecting today&apos;s customer experience.
                We help every personnel understand everything about customer
                service and what customer service is all about. We expose all
                the features of what it takes to be a great customer service
                professional through customer feedback and satisfaction surveys,
                sharing practical insights and identifying every area for
                improvement.
              </p>
            </article>

            {/* PUBLIC AFFAIRS */}
            <article className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Public affairs</h3>
              <p className={styles.capabilityDescription}>
                We enhance customer service as a whole—on-the-job skills,
                training, business impact, and every facet it touches. Whether
                you are a job seeker, employer, or employee, we help you improve
                performance and deeply understand what customer service is all
                about.
              </p>
            </article>

            {/* COURSE MATERIAL */}
            <article className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Course material</h3>
              <p className={styles.capabilityDescription}>
                Our customer service course materials contain all the relevant
                resources a professional needs for both teaching and learning.
                They span a broad range of formats, in print and media, for easy
                knowledge consumption. Our e-courses are designed to guide
                online learners toward stronger learning outcomes in every area
                of customer service. All materials are available via the link on
                our website.
              </p>
            </article>

            {/* CONSULTANCY */}
            <article className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Consultancy</h3>
              <p className={styles.capabilityDescription}>
                Our experts are available during service days and times to
                handle any matters concerning customer service in a professional
                manner. We offer services for personnel at different levels. Our
                strategic consultancy provides expert advice and training to
                upskill employees to align with international best practices,
                driving meaningful workplace learning and change. We help
                identify training needs and use specialists to improve
                performance across the organization.
              </p>
            </article>

            {/* SKILLS */}
            <article className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Skills</h3>
              <p className={styles.capabilityDescription}>
                We help individuals build strong abilities, practical expertise,
                and deeper knowledge in the field of customer service so they
                can excel in real-world roles.
              </p>
            </article>

            {/* WORKSHOP / SEMINAR */}
            <article className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>Workshop / seminar</h3>
              <p className={styles.capabilityDescription}>
                Our professionals organize workshops and seminars for training
                purposes, tailored for customer service personnel in both
                private and public settings. These sessions create a space to
                learn, share experiences, debate key issues, and exchange
                knowledge on modern customer service practices and protocols.
              </p>
            </article>

            {/* IN-HOUSE BESPOKE TRAINING */}
            <article className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>
                In-house bespoke training
              </h3>
              <p className={styles.capabilityDescription}>
                Our in-house bespoke training is readily available for all types
                of teams. We deliver customer service training programs tailored
                to your systems, culture, and organizational needs, either
                individually or in groups. A wide range of courses is available,
                and online learners are especially encouraged to take advantage
                of this program.
              </p>
            </article>

            {/* HUMAN CAPITAL DEVELOPMENT */}
            <article className={styles.capabilityCard}>
              <h3 className={styles.capabilityTitle}>
                Human capital development
              </h3>
              <p className={styles.capabilityDescription}>
                Our human capital development training meets international
                standards for potential clients and returning customers. We
                deliver top-tier services to help individuals acquire knowledge,
                skills, and experiences from diverse sources to boost personnel
                productivity.
              </p>
            </article>
          </div>
        </section>

        {/* Values */}
        <section className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Values that guide us</h2>
            <p className={styles.sectionSubtitle}>
              Every workshop, coaching session, and curriculum is designed
              around these core principles.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value: ValueItem) => (
              <article key={value.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timelineSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How we evolved</h2>
            <p className={styles.sectionSubtitle}>
              From a small training studio to a strategic partner for global
              customer care teams.
            </p>
          </div>
          <ol className={styles.timelineList}>
            {timeline.map((item: TimelineItem) => (
              <li key={item.year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Credibility / Closing */}
        <section className={styles.closingSection}>
          <div className={styles.closingCard}>
            <h2 className={styles.sectionTitle}>
              Ready to level up your team?
            </h2>
            <p className={styles.sectionSubtitle}>
              Let’s design a customer care training journey that fits your
              team’s reality, tools, and growth goals.
            </p>
            {showCallToAction && (
              <button
                type="button"
                className={styles.heroButton}
                onClick={handlePrimaryClick}
              >
                {primaryActionLabel}
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
