import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import About from "./routes/about";
import Contacts from "./routes/contacts";
import Projects from "./routes/project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route to="/" component={Home} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contacts} />
        <Route to="/project" component={Projects} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
