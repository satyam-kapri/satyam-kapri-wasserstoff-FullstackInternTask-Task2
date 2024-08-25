import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DataProvider } from './context/DataContext';

// creating a orange shade theme with dark mode
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{main:'#FF8F00'},
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider >
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
    </DataProvider>
  </StrictMode>
  ,
)
