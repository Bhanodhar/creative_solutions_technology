import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Cpu,
  GraduationCap,
  Award,
  Layout,
  MonitorPlay,
  Globe,
  Code2
} from 'lucide-react';
import PageSEO from '../components/PageSEO';
import PageBanner from '../components/PageBanner';
import CompanySidebar from '../components/CompanySidebar';
import { SERVICES_PAGE_ITEMS } from '../data/siteContent';
import './ServicesPage.css';

const SERVICE_ICONS = {
  Users,
  Cpu,
  GraduationCap,
  Award,
  Layout,
  MonitorPlay,
  Globe,
  Code2
};

export default function ServicesPage() {
  return (
    <>
      <PageSEO
        title="Our Services | Creative Solution Technology"
        description="Explore Staffing, Technology Consulting, Internships, Training & Placement, Web Design & Hosting, Online Software Training, and Digital Marketing services."
        canonicalPath="/services"
      />

      <PageBanner
        title="Services We Provide"
        subtitle="End-to-end IT staffing, enterprise technology consulting, software training, and digital growth solutions."
        pageName="Services"
        highlightValue="8 Core Practices"
        highlightLabel="Tailored for Enterprises, Startups & Career Builders"
      />

      <section className="section">
        <div className="container page-with-sidebar">
          <div>
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <span className="eyebrow">Capabilities</span>
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive technology delivery, talent solutions, and career-oriented training
                designed for measurable outcomes.
              </p>
            </div>

            <div className="services-catalog-grid">
              {SERVICES_PAGE_ITEMS.map((service, index) => {
                const IconComponent = SERVICE_ICONS[service.icon] || Code2;
                return (
                  <motion.article
                    key={service.id}
                    className="service-detail-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.38, delay: index * 0.04 }}
                  >
                    <div className="service-detail-header">
                      <div className="card-icon-wrap" style={{ marginBottom: 0 }}>
                        <IconComponent size={22} />
                      </div>
                      <h2>{service.title}</h2>
                    </div>

                    {service.isSteps ? (
                      <ol className="training-steps-list">
                        {service.steps.map((step, stepIdx) => (
                          <li key={step} className="training-step-item">
                            <span className="step-num">{stepIdx + 1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <p>{service.description}</p>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>

          <CompanySidebar />
        </div>
      </section>
    </>
  );
}
