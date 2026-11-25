import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Clock, ArrowRight } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import PageBanner from '../components/PageBanner';
import CompanySidebar from '../components/CompanySidebar';
import { CAREERS_CONTENT } from '../data/siteContent';
import './CareersPage.css';

export default function CareersPage() {
  return (
    <>
      <PageSEO
        title="Careers & Current Openings | Creative Solution Technology"
        description="Join Creative Solution Technology in Hyderabad. Explore current openings in .Net, PHP, MVC Web Services, Database Administration, and Java/J2EE development."
        canonicalPath="/careers"
      />

      <PageBanner
        title={CAREERS_CONTENT.heroTitle}
        subtitle={CAREERS_CONTENT.heroSubtitle}
        pageName="Careers"
        highlightValue="5 Active Roles"
        highlightLabel="Engineering & Enterprise Technology Opportunities"
      />

      <section className="section">
        <div className="container page-with-sidebar">
          <div>
            <motion.div
              className="careers-block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="eyebrow">Life at Creative Solution Technology</span>
              <h2>Build Your Career With Us</h2>
              {CAREERS_CONTENT.introParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </motion.div>

            <div className="careers-two-col">
              <div className="careers-block" style={{ marginBottom: 0 }}>
                <h2>The Career Which Our Company Provides</h2>
                <ul className="check-list">
                  {CAREERS_CONTENT.companyProvides.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="careers-block" style={{ marginBottom: 0 }}>
                <h2>Services</h2>
                <ul className="check-list">
                  {CAREERS_CONTENT.careerServices.map((srv) => (
                    <li key={srv}>
                      <CheckCircle2 size={18} />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="careers-block" style={{ marginBottom: 0 }}>
              <span className="eyebrow">We Are Hiring</span>
              <h2>Current Openings</h2>
              <div className="openings-list">
                {CAREERS_CONTENT.currentOpenings.map((job) => (
                  <div key={job.id} className="opening-card">
                    <div>
                      <h3>{job.title}</h3>
                      <div className="opening-meta">
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <MapPin size={14} /> {job.location}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <Clock size={14} /> {job.type}
                        </span>
                      </div>
                      <p className="opening-summary">{job.summary}</p>
                    </div>
                    <Link
                      to={`/contact?role=${encodeURIComponent(job.title)}`}
                      className="btn btn-primary"
                      style={{ flexShrink: 0 }}
                    >
                      Apply Now <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CompanySidebar />
        </div>
      </section>
    </>
  );
}
