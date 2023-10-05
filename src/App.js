import './index.css';
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import NoMatch from "./components/NoMatch/NoMatch";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PortfolioStart from "./components/Portfolio/Portfolio";
import ReactProjects from "./components/ReactProjects/ReactProjects";
import JsProjects from "./components/JsProjects/JsProjects";
import HtmlProjects from "./components/HtmlProjects/HtmlProjects";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioStart />} />
        <Route path="/portfolio/1" element={<ReactProjects />} />
        <Route path="/portfolio/2" element={<JsProjects />} />
        <Route path="/portfolio/3" element={<HtmlProjects />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
