import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
