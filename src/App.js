import './index.css';
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import About from './components/About';
import ProjectsCards from './components/ProjectsCards';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/portfolio" element={<ProjectsCards />} /> */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
