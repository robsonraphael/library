import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Themes
import { ThemeProvider } from "styled-components";
import { light, dark } from "./style/theme";

// Pages
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Books } from "./pages/books";

// Components
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { GlobalStyle } from "./style/global";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Header click={toggleTheme} isDark={theme === "light" ? false : true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
