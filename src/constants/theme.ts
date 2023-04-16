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
    backgroundColor: 'var(--card-common-background)',
    ...baseCardProps,
  },
  body: {
    color: 'var(--card-common-text)',
    typography: 'body1',
  },
  media: {
    height: '100px',
    width: '100px',
  },
  title: {
    color: 'var(--card-common-title)',
    textTransform: 'uppercase',
    typography: 'title',
    margin: '5px',
  },
};

const cardThemeGraySx = {
  base: {
    backgroundColor: 'var(--card-extras-border)',
    ...baseCardProps,
  },
  media: {
    height: 180,
    border: 'solid 2px var(--card-extras-border)',
  },
  title: {
    backgroundColor: 'var(--card-extras-background)',
    color: 'var(--card-description-font)',
    typography: 'title',
    margin: '5px',
  },
};

const listingAndDetailSx = (
  backgroundColor: string,
  borderColor: string,
  mediaBorderColor: string,
  titleColor: string
) => ({
  base: {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderStyle: 'solid',
    borderWidth: '3rem',
    ...baseFontProps,
  },
  constraint: {
    typography: 'body1',
    margin: '1px',
    color: 'var(--card-constraint-water-font)',
  },
  description: {
    typography: 'body1',
    margin: '1px',
    color: 'var(--card-description-font)',
  },
  key: {
    color: 'var(--card-text-font)',
    margin: '1px',
    typography: 'body1',
  },
  media: {
    objectFit: 'contain',
    borderColor: mediaBorderColor,
    borderStyle: 'solid',
    borderWidth: '3rem',
  },
  text: {
    typography: 'body1',
    margin: '1px',
    color: 'var(--card-text-font)',
  },
  title: {
    backgroundColor: borderColor,
    color: titleColor,
    margin: '1px',
    textAlign: 'center',
    textTransform: 'uppercase',
    typography: 'h4',
  },
  value: {
    typography: 'body1',
    margin: '1px',
    color: 'var(--card-text-value-font)',
  },
});

const cardThemePlantSx = listingAndDetailSx(
  'var(--card-plant-background)',
  'var(--card-plant-border)',
  'var(--card-plant-media-border)',
  'var(--card-plant-title)'
);

const cardThemeZombieSx = listingAndDetailSx(
  'var(--card-zombie-background)',
  'var(--card-zombie-border)',
  'var(--card-zombie-media-border)',
  'var(--card-zombie-title)'
);

const homeTheme = {
  body: {
    backgroundColor: 'var(--card-common-background)',
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
  cardThemePlantSx,
  cardThemeZombieSx,
  homeTheme,
  menuTheme,
};
