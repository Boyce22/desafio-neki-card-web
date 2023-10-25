import { InfoCard } from "@pages/InfoCard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import theme from ".././theme/index";
import { ThemeProvider } from "styled-components";
import { Register } from "@pages/Register";
import { CardPage } from "@pages/CardPage";

export function PrivateRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<InfoCard />} />
          <Route path="/board" element={<InfoCard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collaborator/:id" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
