import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiBell, FiMenu, FiSettings, FiX } from 'react-icons/fi';
import { neu, N } from '../styles/theme';
import { useNeuState } from '../hooks/useNeuState';

const Navbar = () => {
  const navigate = useNavigate();
  const bellState = useNeuState(neu.iconButton);
  const gearState = useNeuState(neu.iconButton);
  const signState = useNeuState(neu.button);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: isMobile ? '10px' : '16px',
        minHeight: '72px',
        borderRadius: '18px',
        margin: isMobile ? '10px 12px 0' : '12px 20px 0',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.88), rgba(224,229,236,0.92))',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '14px 16px' : '0 22px',
        zIndex: 1000,
        boxShadow: '10px 10px 24px rgba(184,190,199,0.8), -8px -8px 20px rgba(255,255,255,0.9)',
        flexWrap: 'wrap',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'linear-gradient(145deg, #2a9d8f, #1f756b)',
              color: '#fff',
              fontWeight: 900,
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 8px 16px rgba(42,157,143,0.3)',
            }}
          >
            N
          </div>
          <div>
            <div style={{ fontSize: isMobile ? '19px' : '21px', fontWeight: 900, color: N.tealDeep, lineHeight: 1 }}>NexHood</div>
            <div style={{ fontSize: '11px', letterSpacing: '0.06em', color: N.textLight, textTransform: 'uppercase' }}>
              Civic Intelligence
            </div>
          </div>
        </div>
      </Link>

      {isMobile ? (
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          style={{
            ...neu.iconButton,
            width: '40px',
            height: '40px',
            color: N.text,
          }}
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      ) : null}

      <div
        style={{
          display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
          width: isMobile ? '100%' : 'auto',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          gap: isMobile ? '12px' : '20px',
          marginTop: isMobile ? '14px' : '0',
          paddingTop: isMobile ? '12px' : '0',
          borderTop: isMobile ? '1px solid rgba(38, 70, 83, 0.12)' : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
          <button
            {...bellState}
            style={{
              ...bellState.style,
              width: '36px',
              height: '36px',
              fontSize: '18px',
              color: N.text,
            }}
          >
            <FiBell />
          </button>

          <button
            {...gearState}
            style={{
              ...gearState.style,
              width: '36px',
              height: '36px',
              fontSize: '18px',
              color: N.text,
            }}
          >
            <FiSettings />
          </button>
        </div>

        <button
          {...signState}
          onClick={() => {
            setIsMenuOpen(false);
            navigate('/signin');
          }}
          style={{
            ...signState.style,
            padding: '8px 22px',
            width: isMobile ? '100%' : 'auto',
          }}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
