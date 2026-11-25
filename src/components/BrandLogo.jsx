import React from 'react';
import logoImg from '../assets/logo.png';

export default function BrandLogo({ light = false }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: light ? '4px 8px' : '2px 4px',
          borderRadius: '8px',
          backgroundColor: light ? '#FFFFFF' : 'transparent'
        }}
      >
        <img
          src={logoImg}
          alt="Creative Solution Technology Logo"
          style={{
            height: '34px',
            width: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </span>
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
    </span>
  );
}