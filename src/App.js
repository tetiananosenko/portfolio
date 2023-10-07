import './index.css';
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./components/Home";
import PortfolioStart from "./components/Portfolio/Portfolio";
import ReactProjects from "./components/ReactProjects/ReactProjects";
import JsProjects from "./components/JsProjects/JsProjects";
import HtmlProjects from "./components/HtmlProjects/HtmlProjects";
import About from './components/About';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioStart />} />
        <Route path="/portfolio/:id" element={<ReactProjects />} />
        {/* <Route path="/portfolio/1" element={<ReactProjects />} />
        <Route path="/portfolio/2" element={<JsProjects />} />
        <Route path="/portfolio/3" element={<HtmlProjects />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
