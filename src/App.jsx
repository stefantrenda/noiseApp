import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import leftTriangles from "../src/assets/Images/leftTriangles.svg";
import RightTriangles from "../src/assets/Images/RightTriagles.svg";
import bgImage from "../src/assets/Images/BG Dark Gradient.jpg";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center text-white relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-no-repeat bg-left-top"
        style={{
          backgroundImage: `url(${leftTriangles})`,
          opacity: 0.1,
          zIndex: 0,
        }}
      ></div>
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-right-top"
        style={{
          backgroundImage: `url(${RightTriangles})`,
          opacity: 0.1,
          zIndex: 0,
        }}
      ></div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Further routes can be added here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
