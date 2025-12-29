//About.tsx
import React from "react";
import styles from "./About.module.css";
import type { AboutPageProps } from "./About.types";

const defaultStats = [
  { label: "Customer satisfaction", value: "98%" },
  { label: "Avg. first response", value: "< 2 min" },
  { label: "Countries supported", value: "35+" },
];

const defaultValues = [
  {
    title: "Customer-first",
    description:
      "Every conversation starts with listening and ends with clear next steps.",
  },
  {
    title: "Always-on",
    description:
      "24/7 global coverage so customers are never left waiting for help.",
  },
  {
    title: "Human support",
    description:
      "Empathetic agents backed by smart automation, never the other way around.",
  },
  {
    title: "Continuous improvement",
    description:
      "Feedback loops and analytics to keep raising the bar on service quality.",
  },
];

const defaultPrimaryChannels = [
  { label: "Live chat", detail: "Under 2 min median response", type: "chat" },
  { label: "Email", detail: "support@yourcompany.com", type: "email" },
  { label: "Phone", detail: "+49 123 456 789", type: "phone" },
];

const defaultSecondaryChannels = [
  {
    label: "Help Center",
    detail: "24/7 self-serve knowledge base",
    type: "helpcenter",
  },
  { label: "Status page", detail: "Realtime platform updates", type: "other" },
];

export const About: React.FC<AboutPageProps> = ({
  companyName,
  tagline,
  mission,
  story,
  stats = defaultStats,
  values = defaultValues,
  primaryChannels = defaultPrimaryChannels,
  secondaryChannels = defaultSecondaryChannels,
  highlightQuote = "Exceptional support is not an add-on — it is the product.",
  highlightAuthor = "Customer Experience Team, " + companyName,
}) => {
  return (
    <main className={styles.aboutPage}>
      <div className={styles.inner}>
        {/* Hero */}
        <section className={styles.hero} aria-labelledby="about-hero-heading">
          <div>
            <div className={styles.heroMainEyebrow}>About {companyName}</div>
            <h1 id="about-hero-heading" className={styles.heroTitle}>
              Customer care built for
              <span> real people</span>.
            </h1>
            <p className={styles.heroTagline}>{tagline}</p>
            <div className={styles.heroMeta}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} aria-hidden="true" />
                <span>Always-on global support</span>
              </div>
              <p className={styles.heroMetaSub}>
                Helping teams turn every interaction into a long-term
                relationship.
              </p>
            </div>
          </div>

          <aside
            className={styles.heroPanel}
            aria-label="Support performance highlights"
          >
            <div className={styles.heroPanelHeader}>
              <p className={styles.heroPanelTitle}>Customer care snapshot</p>
              <div className={styles.heroPanelStatus}>
                <span
                  className={styles.heroPanelStatusDot}
                  aria-hidden="true"
                />
                <span className={styles.heroPanelStatusLabel}>Live</span>
              </div>
            </div>
            <div className={styles.heroPanelKpiRow}>
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className={styles.heroPanelKpi}>
                  <p className={styles.heroPanelKpiLabel}>{stat.label}</p>
                  <p className={styles.heroPanelKpiValue}>{stat.value}</p>
                </div>
              ))}
            </div>
            <p className={styles.heroPanelPromise}>
              <strong>Every ticket matters.</strong> From first reply to final
              resolution, the team stays accountable, transparent, and
              proactive.
            </p>
          </aside>
        </section>

        {/* Main sections */}
        <section className={styles.sections}>
          <div>
            <div>
              <p className={styles.sectionTitle}>Mission</p>
              <h2 className={styles.sectionHeading}>
                Why this customer care team exists
              </h2>
              <p className={styles.sectionBody}>{mission}</p>
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <p className={styles.sectionTitle}>Story</p>
              <h2 className={styles.sectionHeading}>How it all started</h2>
              <p className={styles.sectionBody}>{story}</p>
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <p className={styles.sectionTitle}>Values</p>
              <h2 className={styles.sectionHeading}>
                The principles behind every reply
              </h2>
              <div className={styles.valuesGrid}>
                {values.map((value) => (
                  <article key={value.title} className={styles.valueCard}>
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                    <p className={styles.valueDescription}>
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside
            className={styles.sidebarCard}
            aria-label="Support philosophy and channels"
          >
            <div>
              <p className={styles.sidebarLabel}>Support philosophy</p>
              <p className={styles.sidebarQuote}>{highlightQuote}</p>
              <p className={styles.sidebarAuthor}>{highlightAuthor}</p>
            </div>

            <div className={styles.channelGroup}>
              <p className={styles.channelHeading}>Primary channels</p>
              <div className={styles.channelRow}>
                {primaryChannels.map((channel) => (
                  <span key={channel.label} className={styles.channelPill}>
                    {channel.label} · {channel.detail}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.channelGroup}>
              <p className={styles.channelHeading}>Also available</p>
              <div className={styles.channelRow}>
                {secondaryChannels.map((channel) => (
                  <span key={channel.label} className={styles.channelPill}>
                    {channel.label} · {channel.detail}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Stats row */}
        {stats.length > 0 && (
          <section
            className={styles.statsRow}
            aria-label="Additional support stats"
          >
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};
