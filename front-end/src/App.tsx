import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style/global";

// Pages
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Books } from "./pages/books";

// Components
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<Books />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
