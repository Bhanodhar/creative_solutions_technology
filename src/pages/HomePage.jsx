import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Cpu,
  Code2,
  Megaphone,
  Search,
  BarChart3,
  Compass,
  Globe,
  Target,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import PageSEO from '../components/PageSEO';
import HeroSection from '../components/HeroSection';
import { HOME_BLOGS, HOME_MARKETING_SERVICES } from '../data/siteContent';
import './HomePage.css';

const ICON_MAP = {
  Users,
  Cpu,
  Code2,
  Megaphone,
  Search,
  BarChart3,
  Compass,
  Globe,
  Target,
  TrendingUp
};

export default function HomePage() {
  return (
    <>
      <PageSEO
        title="Creative Solution Technology | IT Solutions, Staffing & Digital Marketing"
        description="Creative Solution Technology provides IT staffing, technology consulting, web technologies, and strategic digital marketing solutions in Madhapur, Hyderabad."
        canonicalPath="/"
      />

      <HeroSection />

      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">Insights & Expertise</span>
            <h2 className="section-title">Our Blogs</h2>
            <p className="section-subtitle">
              Marketing blogs are essential resources for industry insights, trends, and
              strategies. Experts share their expertise in digital marketing, SEO, content
              creation, and social media to drive business success.
            </p>
          </div>

          <div className="blogs-grid">
            {HOME_BLOGS.map((blog, index) => {
              const IconComponent = ICON_MAP[blog.icon] || Code2;
              return (
                <motion.article
                  key={blog.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="card-icon-wrap">
                    <IconComponent size={23} />
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">What We Deliver</span>
            <h2 className="section-title">Our Services</h2>
          </div>

          <motion.div
            className="services-highlight-band"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  color: '#38BDF8',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px'
                }}
              >
                Take our Business to the next level
              </span>
              <h3>Transform your business with strategic digital marketing.</h3>
              <p>
                Harness data-driven insights, engage customers across platforms, and maximize ROI
                to elevate your brand and drive growth.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/services" className="btn btn-primary">
                All Services <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>

          <div className="marketing-services-grid">
            {HOME_MARKETING_SERVICES.map((service, index) => {
              const IconComponent = ICON_MAP[service.icon] || Globe;
              return (
                <motion.div
                  key={service.id}
                  className="marketing-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="card-icon-wrap" style={{ flexShrink: 0, marginBottom: 0 }}>
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
