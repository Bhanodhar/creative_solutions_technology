import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './PageBanner.css';

export default function PageBanner({ title, subtitle, pageName, highlightValue, highlightLabel }) {
  return (
    <section className="page-banner">
      <div className="page-banner-grid" aria-hidden="true" />
      <div className="container page-banner-inner">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>{pageName}</span>
          </nav>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </motion.div>

        {highlightValue && (
          <motion.div
            className="page-banner-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="page-banner-stat">{highlightValue}</div>
            <div className="page-banner-stat-label">{highlightLabel}</div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
