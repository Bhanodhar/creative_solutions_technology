import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, ExternalLink, MapPin } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import PageBanner from '../components/PageBanner';
import CompanySidebar from '../components/CompanySidebar';
import { COMPANY_INFO } from '../data/siteContent';
import './ContactPage.css';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const appliedRole = searchParams.get('role');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (appliedRole) {
      setFormData((prev) => ({
        ...prev,
        message: `Application for role: ${appliedRole}\n`
      }));
    }
  }, [appliedRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageSEO
        title="Contact Us | Creative Solution Technology"
        description="Get in touch with Creative Solution Technology at Plot No - 3-332, 333, G2, Road No. 17, Ayyappa Society, Mega Hills, Madhapur, Hyderabad 500081."
        canonicalPath="/contact"
      />

      <PageBanner
        title="Contact Us"
        subtitle="Reach out to our tailored marketing and enterprise IT expertise today."
        pageName="Contact"
        highlightValue="Madhapur, Hyderabad"
        highlightLabel="Ayyappa Society, Mega Hills • Telangana 500081"
      />

      <section className="section">
        <div className="container">
          <div className="contact-intro-box">
            If you have decided to be part of Creative Solution Technology and are looking for
            opportunities with us, this is the right place. You could mail your resumes to{' '}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              style={{ color: 'var(--brand-cobalt)', fontWeight: 600 }}
            >
              {COMPANY_INFO.email}
            </a>{' '}
            or also get in touch with any of the following contacts below.
          </div>

          <div className="contact-main-grid">
            <div className="contact-form-card">
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, training inquiry, or career interest..."
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Contact Us <Send size={16} />
                </button>

                {submitted && (
                  <div className="form-success-banner">
                    Thank you, {formData.name || 'there'}! Your message has been recorded. Our
                    team at {COMPANY_INFO.email} will connect with you shortly.
                  </div>
                )}
              </form>
            </div>

            <div className="contact-map-card">
              <h2>Our Location</h2>
              <div className="map-frame-wrap">
                <iframe
                  title="Creative Solution Technology Madhapur Hyderabad Location"
                  src={COMPANY_INFO.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  marginBottom: '16px'
                }}
              >
                <MapPin size={18} color="var(--brand-cobalt)" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>{COMPANY_INFO.fullAddress}</span>
              </p>
              <a
                href={COMPANY_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Open in Maps <ExternalLink size={15} />
              </a>
            </div>
          </div>

          <CompanySidebar />
        </div>
      </section>
    </>
  );
}
