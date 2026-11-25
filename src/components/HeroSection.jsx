import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Code2,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { HERO_SLIDES } from '../data/siteContent';
import './HeroSection.css';

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="hero-section">
      <div className="hero-backdrop-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-grid">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="hero-badge">
                <Sparkles size={15} />
                <span>{current.badge}</span>
              </div>

              <h1 className="hero-title">{current.title}</h1>
              <p className="hero-desc">{current.description}</p>

              <div className="hero-actions">
                <Link to={current.ctaPath} className="btn btn-primary">
                  {current.ctaLabel} <ArrowRight size={17} />
                </Link>
                <Link to={current.secondaryPath} className="btn btn-outline-light">
                  {current.secondaryLabel}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="hero-controls" role="group" aria-label="Hero slide controls">
            <button
              type="button"
              onClick={handlePrev}
              className="hero-arrow-btn"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="hero-arrow-btn"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
            <div className="hero-dots">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`hero-dot ${idx === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="hero-visual-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="visual-topbar">
            <div className="window-dots" aria-hidden="true">
              <span style={{ background: '#F87171' }} />
              <span style={{ background: '#FBBF24' }} />
              <span style={{ background: '#34D399' }} />
            </div>
            <span className="visual-pill">Since 2017 • Hyderabad</span>
          </div>

          <div className="visual-metrics">
            <div className="metric-box">
              <div className="metric-label">Core Focus</div>
              <div className="metric-value">IT & Growth</div>
            </div>
            <div className="metric-box">
              <div className="metric-label">Delivery Model</div>
              <div className="metric-value">Full-Stack</div>
            </div>
          </div>

          <div className="visual-stack-list">
            <div className="stack-row">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Code2 size={16} color="#38BDF8" /> UI / UX & Web Engineering
              </span>
              <span className="stack-tag">Active</span>
            </div>
            <div className="stack-row">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={16} color="#38BDF8" /> IT Staffing & Consulting
              </span>
              <span className="stack-tag">Verified</span>
            </div>
            <div className="stack-row">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38BDF8" /> SEO & Digital Marketing
              </span>
              <span className="stack-tag">ROI-Driven</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
