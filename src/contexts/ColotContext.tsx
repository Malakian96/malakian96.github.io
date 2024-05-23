// ColorContext.tsx
import { createTheme } from '@mui/material';
import { createContext, useContext } from 'react';

// Definir los colores que quieres utilizar en tu aplicación
export const APP_COLORS = {
  primary: '#2196f3',
  secondary: '#AAAA00',
  // Otros colores...
};

export const theme = createTheme({
  palette: {
    primary: {
      main: APP_COLORS.primary,
    },
    secondary: {
      main: APP_COLORS.secondary,
    },

    // Otros colores...
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: APP_COLORS.secondary,
        },
      },
    },
  },
});

// Crear el contexto
export const ColorContext = createContext(theme);

// Hook personalizado para acceder al contexto
export const useColors = () => useContext(ColorContext);
