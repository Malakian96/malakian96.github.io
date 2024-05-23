// App.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ColorContext } from "./contexts/ColotContext";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  const theme = React.useContext(ColorContext);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
