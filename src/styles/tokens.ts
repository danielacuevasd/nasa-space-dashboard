// src/styles/tokens.ts

export const colors = {
    // Base — fondo oscuro azulado, no negro puro
    background: {
      base: '#0b0d17',
      surface: '#151829',
      surfaceElevated: '#1c2038',
    },
  
    // Acentos — usar con moderación, no como fondo
    accent: {
      violet: '#a78bfa',
      violetMuted: '#8b6fd6',
      cyan: '#67e8f9',
      cyanMuted: '#4dd0e1',
    },
  
    // Texto
    text: {
      primary: '#f4f4f6',   // blanco roto, no #fff puro
      secondary: '#a1a5b8',
      muted: '#6b7086',
    },
  
    // Estados semánticos
    semantic: {
      success: '#4ade80',
      warning: '#fbbf24',
      danger: '#f87171',    // ej. asteroide "potencialmente peligroso"
    },
  
    // Bordes
    border: {
      subtle: '#232741',
      accent: '#3d3466',
    },
  } as const;
  
  export const spacing = {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  } as const;
  
  export const typography = {
    fontFamily: {
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace", // para datos/números, refuerza el aire científico
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  } as const;
  
  export const radius = {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  } as const;
  
  export const shadows = {
    sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
    md: '0 4px 12px rgba(0, 0, 0, 0.5)',
    // Glow sutil con el acento — para hover states, el toque "aurora"
    glowViolet: '0 0 20px rgba(167, 139, 250, 0.25)',
    glowCyan: '0 0 20px rgba(103, 232, 249, 0.25)',
  } as const;
  
  export const transitions = {
    fast: '150ms ease',
    base: '250ms ease',
    slow: '400ms ease',
  } as const;