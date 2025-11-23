'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '48px',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '24px',
          fontWeight: '700'
        }}>
          Welcome to R
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '32px',
          opacity: '0.9'
        }}>
          A simple interactive counter app
        </p>
        <div style={{
          fontSize: '4rem',
          fontWeight: '700',
          marginBottom: '24px'
        }}>
          {count}
        </div>
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: '16px 32px',
              fontSize: '1.25rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            −
          </button>
          <button
            onClick={() => setCount(0)}
            style={{
              padding: '16px 32px',
              fontSize: '1.25rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: '16px 32px',
              fontSize: '1.25rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
