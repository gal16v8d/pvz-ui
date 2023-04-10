import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#C5E1A5',
    },
  },
});

const baseFontProps = {
  fontSize: '0.875rem',
  fontWeight: '700',
};

const baseCardProps = {
  maxWidth: '350',
  ...baseFontProps,
};

const cardThemeBrownSx = {
  base: {
    backgroundColor: 'var(--card-bg-1)',
    ...baseCardProps,
  },
  body: {
    color: 'white',
    typography: 'body1',
  },
  title: {
    color: 'var(--card-title-text-1)',
    textTransform: 'uppercase',
    typography: 'title',
    margin: '5px',
  },
};

const cardThemeGraySx = {
  base: {
    backgroundColor: 'var(--card-bg-2)',
    ...baseCardProps,
  },
  media: {
    height: 180,
    border: 'solid 2px var(--card-bg-2)',
  },
  title: {
    backgroundColor: 'var(--card-title-bg-2)',
    color: 'var(--card-title-text-2)',
    typography: 'title',
    margin: '5px',
  },
};

const cardThemeZombieSx = {
  base: {
    backgroundColor: 'var(--card-bg-2)',
    borderColor: 'var(--card-border-2)',
    borderStyle: 'solid',
    borderWidth: '0.5rem',
    ...baseFontProps,
  },
  constraint: {
    typography: 'body1',
    margin: '1px',
    color: 'cyan',
  },
  description: {
    typography: 'body1',
    margin: '1px',
    color: 'rgb(0,0,80)',
  },
  key: {
    color: 'rgb(165,42,42)',
    margin: '1px',
    typography: 'body1',
  },
  media: {
    objectFit: 'contain',
    border: 'solid 2px var(--card-bg-2)',
  },
  text: {
    typography: 'body1',
    margin: '1px',
    color: 'rgb(165,42,42)',
  },
  title: {
    backgroundColor: 'var(--card-border-2)',
    color: 'var(--card-title-text-1)',
    margin: '1px',
    textAlign: 'center',
    textTransform: 'uppercase',
    typography: 'h4',
  },
  value: {
    typography: 'body1',
    margin: '1px',
    color: 'red',
  },
};

const homeTheme = {
  body: {
    backgroundColor: 'rgb(102,51,0)',
    ...baseCardProps,
  },
  media: { height: 500 },
};

const menuTheme = {
  body: {
    background: 'var(--gray-900)',
    backgroundColor: 'var(--gray-900)',
    color: 'var(--surface-900)',
  },
  button: {
    background: 'var(--primary-color)',
    color: 'var(--primary-color-text)',
    border: '1px solid var(--primary-color)',
  },
  drawer: {
    backgroundColor: '#fff0',
  },
};

export {
  baseTheme,
  cardThemeBrownSx,
  cardThemeGraySx,
  cardThemeZombieSx,
  homeTheme,
  menuTheme,
};
