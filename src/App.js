import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contacts from "./routes/contacts";
import Project from "./routes/project";
import Navbar from "./components/Navbar.js";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
