import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send, ArrowUp, ChevronRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import {
  COMPANY_INFO,
  FOOTER_HOME_LINKS,
  FOOTER_SERVICE_LINKS
} from '../data/siteContent';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">Home</h3>
            <ul className="footer-links">
              {FOOTER_HOME_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.path}>
                    <ChevronRight size={14} color="#38BDF8" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>{COMPANY_INFO.fullAddress}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <a href={`tel:${COMPANY_INFO.phoneCompact}`}>{COMPANY_INFO.phoneCompact}</a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.path}>
                    <ChevronRight size={14} color="#38BDF8" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Subscribe To Our Newsletter</h3>
            <p className="newsletter-text">To get the latest news and latest updates</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <label htmlFor="footer-newsletter" style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
                Email address :
              </label>
              <input
                id="footer-newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Subscribe <Send size={15} />
              </button>
              {subscribed && (
                <p className="newsletter-status">Thank you for subscribing to our updates!</p>
              )}
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <BrandLogo light />
          <p>{COMPANY_INFO.copyright}</p>
          <button type="button" onClick={scrollToTop} className="back-to-top">
            Top <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
