import { Login } from "@pages/Login";
import { Register } from "@pages/Register";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import theme from ".././theme/index";
import { ThemeProvider } from "styled-components";
import { CardPage } from "@pages/CardPage";

export function PublicRoutes() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/collaborator/:id" element={<CardPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
