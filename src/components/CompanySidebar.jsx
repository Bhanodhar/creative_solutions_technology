import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, GALLERY_PILLARS, LATEST_NEWS_ITEMS } from '../data/siteContent';
import './CompanySidebar.css';

export default function CompanySidebar() {
  return (
    <aside className="company-sidebar" aria-label="Company Highlights and Contact">
      <div className="sidebar-card">
        <h3 className="sidebar-title">Image Gallery</h3>
        <div className="gallery-grid">
          {GALLERY_PILLARS.map((item) => (
            <div key={item.title} className="gallery-tile">
              <div className="gallery-badge" style={{ backgroundColor: item.accent }}>
                {item.title.slice(0, 2).toUpperCase()}
              </div>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-card">
        <h3 className="sidebar-title">
          <span>Latest News</span>
          <Briefcase size={17} color="var(--brand-cobalt)" />
        </h3>
        <ul className="news-list">
          {LATEST_NEWS_ITEMS.map((role) => (
            <li key={role}>
              <Link to="/careers" className="news-item">
                <span>{role}</span>
                <ArrowRight size={15} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-card">
        <h3 className="sidebar-title">Contact Us</h3>
        <div className="sidebar-contact-list">
          <div className="sidebar-contact-row">
            <MapPin size={18} />
            <span>{COMPANY_INFO.fullAddress}</span>
          </div>
          <div className="sidebar-contact-row">
            <Phone size={18} />
            <a href={`tel:${COMPANY_INFO.phoneCompact}`}>{COMPANY_INFO.phone}</a>
          </div>
          <div className="sidebar-contact-row">
            <Mail size={18} />
            <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </div>
        </div>
      </div>
    </aside>
  );
}
