import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Books } from "./pages/books";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
