import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, HeartHandshake, Sparkles } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import PageBanner from '../components/PageBanner';
import CompanySidebar from '../components/CompanySidebar';
import { ABOUT_CONTENT } from '../data/siteContent';
import './AboutPage.css';

const PILLAR_ICONS = {
  RefreshCw,
  HeartHandshake,
  Sparkles
};

export default function AboutPage() {
  return (
    <>
      <PageSEO
        title="About Us | Creative Solution Technology"
        description="Founded in 2017 in Hyderabad, Creative Solution Technology empowers businesses to achieve digital success through innovation, adaptability, and client-centric focus."
        canonicalPath="/about"
      />

      <PageBanner
        title={ABOUT_CONTENT.heroTitle}
        subtitle={ABOUT_CONTENT.heroSubtitle}
        pageName="About"
        highlightValue="Est. 2017"
        highlightLabel="Delivering IT Solutions & Digital Growth from Hyderabad"
      />

      <section className="section">
        <div className="container page-with-sidebar">
          <div>
            <motion.article
              className="about-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="eyebrow">Who We Are</span>
              <h2>{ABOUT_CONTENT.storyTitle}</h2>
              {ABOUT_CONTENT.storyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </motion.article>

            <motion.article
              className="about-card mission-highlight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.4 }}
            >
              <span className="eyebrow">Purpose</span>
              <h2>{ABOUT_CONTENT.missionTitle}</h2>
              <p>{ABOUT_CONTENT.missionText}</p>
            </motion.article>

            <div className="about-card" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Our Advantage</span>
              <h2>Why Choose Us?</h2>
              <div className="pillars-grid">
                {ABOUT_CONTENT.whyChooseUs.map((item) => {
                  const IconComponent = PILLAR_ICONS[item.icon] || Sparkles;
                  return (
                    <div key={item.title} className="pillar-card">
                      <div className="card-icon-wrap" style={{ flexShrink: 0, marginBottom: 0 }}>
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <CompanySidebar />
        </div>
      </section>
    </>
  );
}
