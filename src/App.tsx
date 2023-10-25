import { ThemeProvider } from "styled-components"

import { AuthContextProvider } from "./contexts/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";
import theme from "./theme";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
