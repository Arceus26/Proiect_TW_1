import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c2c3c', 
      light: '#5c5c70', 
      dark: '#2c2c3c', 
    },
    secondary: {
      main: '#8bc34a', 
      light: '#a2cf6e',
      dark: '#5a9216',
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff',  
    },
    text: {
      primary: '#3f3f4f',  
      secondary: '#575767', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
    fontSize: 13,
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem' },
    button: { fontSize: '1.07rem', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,           
          textTransform: 'none',   
          padding: '10px 20px',     
        },
        containedPrimary: {
          backgroundColor: '#3f3f4f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2c2c3c',
          },
        },
      },
    },
  },
});

export default theme;
