import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import PageBanner from '../components/PageBanner';
import CompanySidebar from '../components/CompanySidebar';
import { CLIENTS_LIST } from '../data/siteContent';
import './ClientsPage.css';

export default function ClientsPage() {
  return (
    <>
      <PageSEO
        title="Our Clients | Creative Solution Technology"
        description="Satisfying clients with effective digital marketing campaigns, web engineering, and IT solutions: Bathala Group, Hitek Park, Triochi Concepts, Vanmayi Technologies, Wincor Nixdorf, and Elite Confex."
        canonicalPath="/clients"
      />

      <PageBanner
        title="Clients"
        subtitle="Satisfy clients with effective Digital Marketing Campaigns and reliable enterprise IT delivery."
        pageName="Clients"
        highlightValue="Trusted Partners"
        highlightLabel="Across Infrastructure, IT, Retail & International Trade"
      />

      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">Portfolio & Partnerships</span>
            <h2 className="section-title">Organizations We Work With</h2>
            <p className="section-subtitle">
              Long-term collaborations built on measurable digital growth, engineering quality,
              and dedicated support.
            </p>
          </div>

          <div className="clients-grid" style={{ marginBottom: '72px' }}>
            {CLIENTS_LIST.map((client, index) => (
              <motion.article
                key={client.id}
                className="client-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div>
                  <div className="client-logo-box">
                    <div
                      className="client-monogram"
                      style={{ backgroundColor: client.accent }}
                    >
                      {client.monogram}
                    </div>
                    <span className="client-sector">{client.sector}</span>
                  </div>
                  <h2>{client.name}</h2>
                  <p>{client.description}</p>
                </div>

                {client.website === '#' ? (
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                    Visit their Website <ExternalLink size={15} />
                  </Link>
                ) : (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    Visit their Website <ExternalLink size={15} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>

          <div className="page-with-sidebar">
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px'
              }}
            >
              <span className="eyebrow">Start a Collaboration</span>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '12px' }}>
                Ready to Become Our Next Success Story?
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '22px' }}>
                Connect with our Hyderabad team to discuss web development, IT staffing, or
                customized digital marketing campaigns for your organization.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Schedule a Consultation
              </Link>
            </div>
            <CompanySidebar />
          </div>
        </div>
      </section>
    </>
  );
}
