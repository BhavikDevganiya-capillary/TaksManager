import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CreateSlides from "./Components/Slides/CreateSlides";
import Slides from "./Components/Slides/Slides";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex-grow bg-gradient-to-r from-violet-500 to-fuchsia-500 flex overflow-x-auto">
            <Routes>
              <Route path="/" element={<Slides />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
