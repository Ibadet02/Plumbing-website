import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
