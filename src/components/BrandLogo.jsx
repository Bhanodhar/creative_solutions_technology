import React from 'react';

export default function BrandLogo({ light = false }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <svg
        width="40"
        height="32"
        viewBox="0 0 64 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cstGrad1" x1="0" y1="0" x2="36" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="cstGrad2" x1="28" y1="0" x2="64" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0891B2" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <path
          d="M24 8C14.0589 8 6 15.1634 6 24C6 32.8366 14.0589 40 24 40C29.4 40 34.2 37.8 37.5 34.4L32.8 29.8C30.6 32 27.5 33.4 24 33.4C17.9 33.4 13 29.2 13 24C13 18.8 17.9 14.6 24 14.6C27.5 14.6 30.6 16 32.8 18.2L37.5 13.6C34.2 10.2 29.4 8 24 8Z"
          fill={light ? '#60A5FA' : 'url(#cstGrad1)'}
        />
        <path
          d="M40 8C34.6 8 29.8 10.2 26.5 13.6L31.2 18.2C33.4 16 36.5 14.6 40 14.6C46.1 14.6 51 18.8 51 24C51 29.2 46.1 33.4 40 33.4C36.5 33.4 33.4 32 31.2 29.8L26.5 34.4C29.8 37.8 34.6 40 40 40C49.9411 40 58 32.8366 58 24C58 15.1634 49.9411 8 40 8Z"
          fill="url(#cstGrad2)"
        />
        <circle cx="32" cy="24" r="3.5" fill={light ? '#FFFFFF' : '#0F172A'} />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.125rem',
          letterSpacing: '-0.02em',
          color: light ? '#FFFFFF' : 'var(--text-primary)'
        }}
      >
        Creative Solution Technology
      </span>
    </div>
  );
}
