// import logo from './logo.svg';
import './App.css';
import Profile from './portfolio container/home/profile';
import Navbar from './portfolio container/home/navbar';
import Layout from "./components/Layout/Layout"
import HeroSection from './components/hero-section/HeroSection';
import { Routes, Route, Link } from "react-router-dom";
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
     {/* <Navbar/> */}
     {/* <Profile/> */}
     {/* <HeroSection/> */}
      {/* <Profile/> */}
    </div>
  );
}




export default App;
