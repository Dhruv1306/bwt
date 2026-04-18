import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FoodRating } from "./components/foodRating";
import { shopping as Shopping } from "./components/shopping";
import { home as Home } from "./components/home";
import { about as About } from "./components/about";
import { contact as Contact } from "./components/contact";
import { navbar as Navbar } from "./components/navbar";

const App = () => {
  return (
    <>
      <div>
        {/* <FoodRating /> */}
        {/* <Shopping /> */}
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
