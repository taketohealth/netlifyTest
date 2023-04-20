import { createTheme, alpha } from '@material-ui/core/styles'
// Use createMuiTheme here is good for theme object key suggestion
let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1A285D',
      light: '#7BB8C8',
    },
    supporting: {
      supporting01: '#A9BFCC',
      supporting02: '#F2512D',
      supporting03: '#272C31',
    },
    prophecyPrimary: {
      main: '#29678F',
      light: '#7BB8C8',
    },
    prophecySupporting: {
      supporting01: '#E0C38C',
      supporting02: '#ACACAC',
      supporting03: '#E2E9EB',
    },
    secondary: {
      dark: '#DC3A16',
      main: '#F2512D',
    },
    error: {
      main: '#FF2848',
    },
    success: {
      main: '#7FE34A',
    },
    divider: '#DEDEDE',
    text: {
      primary: '#272C31',
    },
    grey: {
      50: '#FFFFFF',
      100: '#FAFAFA',
      200: '#F5F5F5',
      300: '#F0F0F0',
      400: '#DEDEDE',
      500: '#C2C2C2',
      600: '#979797',
      700: '#818181',
      800: '#606060',
      900: '#3C3C3C',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1216,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont,"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell","Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif',
  },
})

theme = createTheme(theme, {
  props: {
    // 组件的名字 ⚛️
    MuiButtonBase: {
      // 需要应用的属性
      disableRipple: true, // 在整个应用中都不会有涟漪效果 💣！
    },
  },
  overrides: {
    MuiButton: {
      root: {
        whiteSpace: 'nowrap',
        borderRadius: 6,
        height: theme.spacing(7),
        padding: theme.spacing(2, 6),
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.fontWeightBold,
        transition: theme.transitions.create(
          ['transform', 'background-color', 'color'],
          {
            duration: theme.transitions.duration.standard,
          }
        ),
        [theme.breakpoints.down('xs')]: {
          height: theme.spacing(5.625),
          fontSize: theme.typography.body2.fontSize,
        },
      },
      text: {
        padding: theme.spacing(2, 6),
        textDecoration: 'underline',
        '&:hover': {
          color: theme.palette.secondary.main,
          textDecoration: 'underline',
          '& path': {
            fill: theme.palette.secondary.main,
          },
        },
        '&:active': {
          color: theme.palette.secondary.dark,
          textDecoration: 'underline',
        },
        '&:disabled': {
          color: theme.palette.grey[600],
        },
      },
      outlined: {
        padding: theme.spacing(2, 6),
        backgroundColor: theme.palette.background.paper,
      },
      sizeSmall: {
        height: theme.spacing(5.5),
        fontSize: theme.typography.caption.fontSize,
        padding: theme.spacing(1.5, 5),
      },
      outlinedSizeSmall: {
        padding: theme.spacing(1.5, 5),
      },
      containedSizeSmall: {
        padding: theme.spacing(1.5, 5),
      },
      containedSecondary: {
        '&:hover': {
          transform: 'translateY(-4px)',
          backgroundColor: theme.palette.secondary.main,
          boxShadow: `0 11px 15px -4px ${alpha(
            theme.palette.secondary.main,
            0.3
          )}`,
        },
        '&:active': {
          backgroundColor: theme.palette.secondary.dark,
          boxShadow: `0 11px 15px -4px ${alpha(
            theme.palette.secondary.dark,
            0.3
          )}`,
        },
        '&:disabled': {
          color: theme.palette.grey[600],
          backgroundColor: theme.palette.grey[400],
        },
      },
      outlinedPrimary: {
        '&:hover': {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          '& path': {
            fill: theme.palette.secondary.main,
          },
        },
        '&:active': {
          color: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.dark,
        },
        '&:disabled': {
          color: theme.palette.grey[600],
          backgroundColor: theme.palette.grey[200],
          borderColor: theme.palette.grey[400],
        },
      },

      textPrimary: {
        padding: theme.spacing(2, 6),
      },
      contained: {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '& svg path': {
            fill: theme.palette.primary.contrastText,
          },
        },
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          opacity: 0.9,
        },
      },
      endIcon: {
        '& path': {
          transition: theme.transitions.create('fill', {
            duration: theme.transitions.duration.standard,
          }),
        },
      },
    },
    MuiSelect: {
      select: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold,
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '2.44rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.40rem',
      },
    },
    h2: {
      fontSize: '3.05rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.58rem',
      },
    },
    h3: {
      fontSize: '2.44rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.40rem',
      },
    },
    h4: {
      fontSize: '1.95rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.56rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.11rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.98rem',
      },
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: theme.typography.fontWeightBold,
    },
    caption: {
      fontSize: '0.8rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.78rem',
      },
    },
    overline: {
      fontSize: '0.8rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.78rem',
      },
    },
  },
})

export default theme
